'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { EditorProps, Monaco, OnMount } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import monacoDacrulaTheme from '@/assets/monaco-theme/dracula.json'
import { useTheme } from 'next-themes'

interface EditorContextProviderProps {
  children: ReactNode
}

interface EditorContentContextData {
  isEditorReady: boolean
  handleEditorDidMount: EditorProps['onMount']
  handleFormatDocument: () => void
}

export const EditorContentContext = createContext(
  {} as EditorContentContextData,
)

export function EditorContentContextProvider({
  children,
}: EditorContextProviderProps) {
  const monacoRef = useRef<Monaco>()
  const editorRef = useRef<editor.IStandaloneCodeEditor>()
  const [mounted, setMounted] = useState(false)
  const [isEditorReady, setIsEditorReady] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (mounted) {
      resolvedTheme === 'dark' &&
        monacoRef.current?.editor.setTheme('dracula-theme')
      resolvedTheme === 'light' && monacoRef.current?.editor.setTheme('vs')
      setIsEditorReady(true)
    }
  }, [resolvedTheme, mounted])

  const handleEditorDidMount = useCallback<OnMount>((editor, monaco) => {
    monaco.editor.defineTheme(
      'dracula-theme',
      monacoDacrulaTheme as editor.IStandaloneThemeData,
    )
    monacoRef.current = monaco
    editorRef.current = editor
    setMounted(true)
  }, [])

  function handleFormatDocument() {
    editorRef.current?.getAction('editor.action.formatDocument')?.run()
  }

  return (
    <EditorContentContext.Provider
      value={{
        isEditorReady,
        handleEditorDidMount,
        handleFormatDocument,
      }}
    >
      {children}
    </EditorContentContext.Provider>
  )
}
