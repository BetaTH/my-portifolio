import { api } from '../api'
import { PortfolioData } from '../types/portfolio-data'
import { env } from '../utils/env'

interface GetPortfolioProjectsDataProps {
  data: PortfolioData
}

const envFileName = env.PORTFOLIO_DATA_FILE_NAME

export async function PutPortfolioProjectsData({
  data,
}: GetPortfolioProjectsDataProps) {
  const DataFileName = envFileName || 'portfolio-data.json'

  await api(`portfolio-data/${DataFileName}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
