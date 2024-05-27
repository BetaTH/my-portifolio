import CustomEditor from '@/components/custom-editor'
import { Header } from '@/components/layout/header'
import { GetPortfolioProjectsData } from '@/lib/services/get-portfolio-projects-data'
import { PortfolioData } from '@/lib/types/portfolio-data'
export const dynamic = 'force-dynamic'

export default async function EditorPage() {
  const res = await GetPortfolioProjectsData()
  const data: PortfolioData = await res.json()
  return (
    <main
      id={'home'}
      className="dark:bg-body bg-gray-50 pt-[4.75rem] h-screen 2md:pt-[4.5rem] sm:h-svh"
    >
      <Header />
      <CustomEditor data={data} />
    </main>
  )
}
