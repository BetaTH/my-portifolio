'use client'

import { createContext, ReactNode, useCallback, useRef, useState } from 'react'
import { EditorProps, Monaco, OnMount } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import monacoDacrulaTheme from '@/assets/monaco-theme/dracula.json'

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
  const [isEditorReady, setIsEditorReady] = useState(false)

  const handleEditorDidMount = useCallback<OnMount>((editor, monaco) => {
    monaco.editor.defineTheme(
      'custom-theme',
      monacoDacrulaTheme as editor.IStandaloneThemeData,
    )
    monaco.editor.setTheme('custom-theme')
    monacoRef.current = monaco
    editorRef.current = editor
    setIsEditorReady(true)
    // editor.getAction('editor.action.formatDocument')?.run()
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
