import { EditorContentContextProvider } from '@/contexts/editor-content-context'
import { PortfolioDataContextProvider } from '@/contexts/portfolio-data-context'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PortfolioDataContextProvider>
      <EditorContentContextProvider>{children}</EditorContentContextProvider>
    </PortfolioDataContextProvider>
  )
}
