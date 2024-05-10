import { EditorContentContextProvider } from '@/contexts/EditorContentContext'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <EditorContentContextProvider>{children}</EditorContentContextProvider>
}
