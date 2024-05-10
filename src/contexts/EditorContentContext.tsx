'use client'

import { createContext, ReactNode, useCallback, useState } from 'react'

import { EditorProps, OnMount } from '@monaco-editor/react'

import { editor } from 'monaco-editor'

import monacoDacrulaTheme from '@/assets/monaco-theme/dracula.json'

interface EditorContextProviderProps {
  children: ReactNode
}

interface EditorContentContextData {
  isEditorReady: boolean
  handleEditorDidMount: EditorProps['onMount']
}

export const EditorContentContext = createContext(
  {} as EditorContentContextData,
)

export function EditorContentContextProvider({
  children,
}: EditorContextProviderProps) {
  // const monacoRef = useRef<Monaco>()
  // const editorRef = useRef<editor.IStandaloneCodeEditor>()
  const [isEditorReady, setIsEditorReady] = useState(false)

  const handleEditorDidMount = useCallback<OnMount>((editor, monaco) => {
    // editorRef.current = editor
    // monacoRef.current = monaco

    monaco.editor.defineTheme(
      'custom-theme',
      monacoDacrulaTheme as editor.IStandaloneThemeData,
    )

    monaco.editor.setTheme('custom-theme')
    setIsEditorReady(true)
  }, [])

  return (
    <EditorContentContext.Provider
      value={{
        isEditorReady,
        handleEditorDidMount,
      }}
    >
      {children}
    </EditorContentContext.Provider>
  )
}
