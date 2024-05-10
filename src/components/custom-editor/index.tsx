'use client'
import { EditorContentContext } from '@/contexts/EditorContentContext'
import { PortfolioData } from '@/lib/types/portfolio-data'
import { cn } from '@/lib/utils/cn'
import Editor from '@monaco-editor/react'
import { useContext, useEffect, useState } from 'react'
import { Button } from '../buttons/button'
import { projectsSchema } from '@/lib/shemas/portfolio-project-schema'
import { ZodError } from 'zod'

export default function CustomEditor({ data }: { data: PortfolioData }) {
  const [portfolioDataString, setPortfolioDataString] = useState<string>(
    JSON.stringify(data, null, 2),
  )
  const { handleEditorDidMount, isEditorReady } =
    useContext(EditorContentContext)

  const [showLineNumber, setShowLineNumbers] = useState(true)

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth <= 640
        ? setShowLineNumbers(false)
        : setShowLineNumbers(true)

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function handleSave() {
    try {
      const portfolioData = JSON.parse(portfolioDataString)
      const portfolioDataValidated: PortfolioData =
        projectsSchema.parse(portfolioData)
      console.log(portfolioDataValidated)
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error)
      }
      console.log(error)
    }
  }

  return (
    <div className="h-full flex w-full relative">
      <Editor
        className={cn('w-full h-full pr-60', {
          invisible: !isEditorReady,
        })}
        onChange={(value) => {
          value && setPortfolioDataString(value)
        }}
        onMount={handleEditorDidMount}
        value={portfolioDataString}
        defaultLanguage="json"
        options={{
          minimap: {
            enabled: false,
          },
          lineNumbers: showLineNumber ? 'on' : 'off',
          rulers: [90, 120],
          renderLineHighlight: 'gutter',
          fontSize: 14,
          lineHeight: 20,
          fontFamily: 'JetBrains Mono, Menlo, monospace',
          fontLigatures: true,
          'semanticHighlighting.enabled': true,
          bracketPairColorization: {
            enabled: true,
          },
          wordWrap: 'on',
          tabSize: 2,
        }}
      />
      <div className="absolute right-0 top-0 h-full w-60 flex flex-col  items-center gap-6 px-5 border-l border-gray-200/50">
        <p className="text-2xl border-b border-primary w-full text-center pb-1">
          Options
        </p>
        <Button onClick={handleSave} className="w-full">
          Save
        </Button>
      </div>
    </div>
  )
}
