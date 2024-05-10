import { EditorContentContextProvider } from '@/contexts/EditorContentContext'
import { Toaster } from 'react-hot-toast'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <EditorContentContextProvider>
      {children}
      <Toaster />
    </EditorContentContextProvider>
  )
}
