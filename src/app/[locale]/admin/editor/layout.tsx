import { EditorContentContextProvider } from '@/contexts/editor-content-context'
import { UpdatePortfolioDataContextProvider } from '@/contexts/update-portfolio-data-context'
import { Toaster } from 'react-hot-toast'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UpdatePortfolioDataContextProvider>
      <EditorContentContextProvider>
        {children}
        <Toaster />
      </EditorContentContextProvider>
    </UpdatePortfolioDataContextProvider>
  )
}
