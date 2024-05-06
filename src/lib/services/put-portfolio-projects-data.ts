import { api } from '../api'
import { Project } from '../types/project'
import { ProjectInDevelopment } from '../types/project-in-development'

interface PortfolioLocaleData {
  projects: Project[]
  projectsInDevelopment: ProjectInDevelopment[]
}

interface PortfolioData {
  en: PortfolioLocaleData
  pt: PortfolioLocaleData
}

interface GetPortfolioProjectsDataProps {
  data: PortfolioData
}

export async function PutPortfolioProjectsData({
  data,
}: GetPortfolioProjectsDataProps) {
  await api('portfolio-data/portfolio-data.json', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
