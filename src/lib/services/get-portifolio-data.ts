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

interface PortfolioData {
  en: PortfolioLocaleData
  pt: PortfolioLocaleData
}

export async function GetPortfolioProjectsData({
  locale = 'en',
}: GetPortfolioProjectsDataProps) {
  const data: PortfolioData = await api(
    'portfolio-data/portfolio-data.json',
    {},
  ).then((res) => res.json())
  return data[locale]
}
