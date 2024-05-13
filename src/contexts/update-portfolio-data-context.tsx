'use client'

import { CustomToast } from '@/components/layout/toast'
import { editPortfolioData } from '@/lib/actions/edit-portfolio-data'
import { projectsSchema } from '@/lib/schemas/portfolio-project-schema'
import { PortfolioData } from '@/lib/types/portfolio-data'
import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useState } from 'react'
import toast from 'react-hot-toast'
import { ZodError } from 'zod'

interface EditorContextProviderProps {
  children: ReactNode
}

interface UpdatePortfolioDataContextData {
  isSaving: boolean
  portfolioDataString: string
  setPortfolioDataString: (value: string) => void
  handleSaveData: () => void
}

export const UpdatePortfolioDataContext = createContext(
  {} as UpdatePortfolioDataContextData,
)

export function UpdatePortfolioDataContextProvider({
  children,
}: EditorContextProviderProps) {
  const [portfolioDataString, setPortfolioDataString] = useState<string>('')
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  async function handleSaveData() {
    setIsSaving(true)
    let portfolioDataValidated: PortfolioData
    try {
      const portfolioData = JSON.parse(portfolioDataString)
      portfolioDataValidated = projectsSchema.parse(portfolioData)
    } catch (error) {
      if (error instanceof ZodError) {
        toast.custom((t) => {
          return (
            <CustomToast
              title="Error"
              message="Data validation error"
              feedback="error"
              isVisible={t.visible}
            />
          )
        })
      } else {
        toast.custom((t) => {
          return (
            <CustomToast
              title="Error"
              message="Json parse error"
              feedback="error"
              isVisible={t.visible}
            />
          )
        })
      }
      return
    }
    const res = await editPortfolioData(portfolioDataValidated)
    if (res.error) {
      toast.custom((t) => {
        return (
          <CustomToast
            title={`Error`}
            message={res.message}
            feedback="error"
            isVisible={t.visible}
          />
        )
      })
      if (res.status === 401) {
        router.push('/admin')
      }
    } else {
      toast.custom((t) => {
        return (
          <CustomToast
            title="Success"
            message="Portfolio data saved"
            feedback="success"
            isVisible={t.visible}
          />
        )
      })
    }
    setIsSaving(false)
  }
  return (
    <UpdatePortfolioDataContext.Provider
      value={{
        isSaving,
        portfolioDataString,
        setPortfolioDataString,
        handleSaveData,
      }}
    >
      {children}
    </UpdatePortfolioDataContext.Provider>
  )
}
