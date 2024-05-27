'use client'

import { useToast } from '@/lib/hooks/useToast'
import { projectsSchema } from '@/lib/schemas/portfolio-project-schema'
import { PortfolioData } from '@/lib/types/portfolio-data'
import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useState } from 'react'
import { ZodError } from 'zod'

interface EditorContextProviderProps {
  children: ReactNode
}

interface PortfolioDataContextData {
  isLoading: boolean
  portfolioDataString: string
  setPortfolioDataString: (value: string) => void
  handleSaveData: () => void
  handleUpdateCache: () => void
}

export const PortfolioDataContext = createContext(
  {} as PortfolioDataContextData,
)

export function PortfolioDataContextProvider({
  children,
}: EditorContextProviderProps) {
  const [portfolioDataString, setPortfolioDataString] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { showErrorToast, showSuccessToast } = useToast()

  async function handleSaveData() {
    setIsLoading(true)
    let portfolioDataValidated: PortfolioData
    try {
      const portfolioData = JSON.parse(portfolioDataString)
      portfolioDataValidated = projectsSchema.parse(portfolioData)
      const res = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(portfolioDataValidated),
      })
      const response = await res.json()
      if (res.ok && res.status === 200) {
        showSuccessToast('Portfolio data saved')
      } else if (res.status === 401) {
        router.replace('/admin')
      } else {
        showErrorToast(response.message)
      }
    } catch (error) {
      if (error instanceof ZodError) {
        showErrorToast('Data validation error')
      } else {
        showErrorToast('Json parse error')
      }
      return
    } finally {
      setIsLoading(false)
    }
  }

  async function handleUpdateCache() {
    setIsLoading(true)
    const res = await fetch('/api/portfolio')
    if (!res.ok && res.status === 401) {
      showErrorToast('Unauthorized')
      router.push('/admin')
    } else if (!res.ok) {
      showErrorToast('Error on update')
    }
    if (res.ok && res.status === 200) {
      showSuccessToast('Cache updated')
    }
    setIsLoading(false)
  }
  return (
    <PortfolioDataContext.Provider
      value={{
        isLoading,
        portfolioDataString,
        setPortfolioDataString,
        handleSaveData,
        handleUpdateCache,
      }}
    >
      {children}
    </PortfolioDataContext.Provider>
  )
}
