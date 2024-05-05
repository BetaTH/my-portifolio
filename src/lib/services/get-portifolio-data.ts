import { api } from '../api'

interface PortfolioData {
  en: {
    projects: {
      title: string
      description: string
      'link-code': string
      'link-deploy': string
      img: string
    }[]

    'project-in-development': {
      title: string
      description: string
      'link-code': string
    }[]
  }
  pt: {
    projects: {
      title: string
      description: string
      'link-code': string
      'link-deploy': string
      img: string
    }[]

    'project-in-development': {
      title: string
      description: string
      'link-code': string
    }[]
  }
}

export async function GetPortfolioProjectsData() {
  const data: PortfolioData = await api(
    'portfolio-data/portfolio-data.json',
    {},
  ).then((res) => res.json())
  return data
}
