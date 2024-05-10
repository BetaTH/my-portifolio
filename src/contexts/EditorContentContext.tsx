'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
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
  const [isEditorReady, setIsEditorReady] = useState(false)

  useEffect(() => {
    console.log(isEditorReady)
  }, [isEditorReady])

  const handleEditorDidMount = useCallback<OnMount>((editor, monaco) => {
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
