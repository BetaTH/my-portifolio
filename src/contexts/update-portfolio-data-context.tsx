'use client'

import { CustomToast } from '@/components/layout/toast'
import { projectsSchema } from '@/lib/shemas/portfolio-project-schema'
import { PortfolioData } from '@/lib/types/portfolio-data'
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

  async function handleSaveData() {
    setIsSaving(true)
    try {
      const portfolioData = JSON.parse(portfolioDataString)
      const portfolioDataValidated: PortfolioData =
        projectsSchema.parse(portfolioData)
      const res = await fetch('/api/projects?secret=94250107', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(portfolioDataValidated),
      })

      const response = await res.json()

      if (!res.ok) {
        toast.custom(() => {
          return (
            <CustomToast
              title={`${res.status} Error`}
              message={response.message}
              feedback="error"
            />
          )
        })
      } else {
        toast.custom(() => {
          return (
            <CustomToast
              title="Success"
              message="Portfolio data saved"
              feedback="success"
            />
          )
        })
      }
    } catch (error) {
      if (error instanceof ZodError) {
        toast.custom(() => {
          return (
            <CustomToast
              title="Error"
              message="Data validation error"
              feedback="error"
            />
          )
        })
      } else {
        toast.custom(() => {
          return (
            <CustomToast
              title="Error"
              message="Json parse error"
              feedback="error"
            />
          )
        })
      }
    } finally {
      setIsSaving(false)
    }
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
