// eslint-disable-next-line camelcase
import { unstable_cache } from 'next/cache'
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

const dataCached = unstable_cache(
  async (url: string) => api(url, {}),
  ['my-projects-data'],
  { tags: ['projects'] },
)

export async function GetPortfolioProjectsData({
  locale = 'en',
}: GetPortfolioProjectsDataProps) {
  //   const res = await api('portfolio-data/portfolio-data.json', {
  //     next: { tags: ['projects'] },
  //   })
  const res = await dataCached('portfolio-data/portfolio-data.json')
  const data: PortfolioData = await res.json()

  return data[locale]
}
