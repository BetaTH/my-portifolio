import { api } from '../api'
import { Project } from '../types/project'
import { ProjectInDevelopment } from '../types/project-in-development'

interface GetPortfolioProjectsDataProps {
  locale?: 'en' | 'pt'
}

interface PortfolioLocaleData {
  projects: Project[]
  projectsInDevelopment: ProjectInDevelopment[]
}

export interface PortfolioData {
  en: PortfolioLocaleData
  pt: PortfolioLocaleData
}

export async function GetPortfolioProjectsData({
  locale = 'en',
}: GetPortfolioProjectsDataProps) {
  const res = await api('portfolio-data/portfolio-data.json', {
    next: { tags: ['projects'] },
  })
  const data: PortfolioData = await res.json()

  return data[locale]
}
