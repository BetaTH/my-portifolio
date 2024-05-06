import { api } from '../api'

export async function GetPortfolioProjectsData() {
  const res = await api('portfolio-data/portfolio-data.json', {})
  return res
}
