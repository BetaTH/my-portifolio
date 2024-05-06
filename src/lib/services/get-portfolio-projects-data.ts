import { api } from '../api'
import { Project } from '../types/project'
import { ProjectInDevelopment } from '../types/project-in-development'

interface PortfolioLocaleData {
  projects: Project[]
  projectsInDevelopment: ProjectInDevelopment[]
}

export interface PortfolioData {
  en: PortfolioLocaleData
  pt: PortfolioLocaleData
}

export async function GetPortfolioProjectsData() {
  const res = await api('portfolio-data/portfolio-data.json', {})
  return res
}
