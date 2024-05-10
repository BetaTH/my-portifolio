'use client'
import { Button } from '@/components/buttons/button'
import { EditorContentContext } from '@/contexts/EditorContentContext'
import { PortfolioData } from '@/lib/types/portfolio-data'
import { cn } from '@/lib/utils/cn'
import Editor from '@monaco-editor/react'
import { useContext, useEffect, useState } from 'react'

export default function EditorPage() {
  const [data, setData] = useState<PortfolioData>()
  useEffect(() => {
    fetch('/api/projects?secret=94250107')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

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

  const { handleEditorDidMount, isEditorReady } =
    useContext(EditorContentContext)
  return (
    <main id={'home'} className="bg-body pt-[4.75rem] h-screen">
      <div className="h-full flex w-full relative">
        <Editor
          className={cn('w-full h-full pr-60', {
            invisible: !data && isEditorReady,
          })}
          onMount={handleEditorDidMount}
          value={data && JSON.stringify(data, null, 2)}
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
          <Button className="w-full">Save</Button>
        </div>
      </div>
    </main>
  )
}
