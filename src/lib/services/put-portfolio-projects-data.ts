import { api } from '../api'
import { PortfolioData } from '../types/portfolio-data'

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
