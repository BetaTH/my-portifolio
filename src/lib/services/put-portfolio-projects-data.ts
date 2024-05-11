import { api } from '../api'
import { PortfolioData } from '../types/portfolio-data'
import { env } from '../utils/env'

interface GetPortfolioProjectsDataProps {
  data: PortfolioData
}

export async function PutPortfolioProjectsData({
  data,
}: GetPortfolioProjectsDataProps) {
  const DataFileName = env.PORTFOLIO_DATA_FILE_NAME && 'portfolio-data.json'
  await api(`portfolio-data/${DataFileName}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
