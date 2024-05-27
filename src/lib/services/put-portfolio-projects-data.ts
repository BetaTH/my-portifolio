import { api } from '../api'
import { PortfolioData } from '../types/portfolio-data'
import { env } from '../utils/env'

interface GetPortfolioProjectsDataProps {
  data: PortfolioData
}
const bucketName = env.BUCKET_NAME
const fileName = env.PORTFOLIO_DATA_FILE_NAME

export async function PutPortfolioProjectsData({
  data,
}: GetPortfolioProjectsDataProps) {
  await api(`${bucketName}/${fileName}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
