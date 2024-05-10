'use client'

import { PortfolioData } from '@/lib/types/portfolio-data'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface PortfolioDataContextProviderProps {
  children: ReactNode
}

interface PortfolioDataContextData {
  portfolioData: PortfolioData | undefined
  isLoading: boolean
}

export const PortfolioDataContext = createContext(
  {} as PortfolioDataContextData,
)

export async function PortfolioDataContextProvider({
  children,
}: PortfolioDataContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [portfolioData, setPortfolioData] = useState<PortfolioData>()

  useEffect(() => {
    fetch('/api/projects?secret=94250107')
      .then((res) => res.json())
      .then((res) => {
        setPortfolioData(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <PortfolioDataContext.Provider value={{ portfolioData, isLoading }}>
      {children}
    </PortfolioDataContext.Provider>
  )
}
