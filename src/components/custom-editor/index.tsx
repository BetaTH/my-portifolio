'use client'
import { PortfolioData } from '@/lib/types/portfolio-data'
import { cn } from '@/lib/utils/cn'
import Editor from '@monaco-editor/react'
import { useContext, useEffect, useState } from 'react'
import { EditorSettings } from '../editor-settings'
import { Overlay } from '../layout/overlay'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { Loading } from '../svg-components/loading'
import { EditorContentContext } from '@/contexts/editor-content-context'
import { PortfolioDataContext } from '@/contexts/portfolio-data-context'

export default function CustomEditor({ data }: { data: PortfolioData }) {
  const { handleEditorDidMount, isEditorReady } =
    useContext(EditorContentContext)

  const { setPortfolioDataString, portfolioDataString } =
    useContext(PortfolioDataContext)

  useEffect(() => {
    setPortfolioDataString(JSON.stringify(data, null, 2))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const [showLineNumber, setShowLineNumbers] = useState(true)
  const { isMobile } = useMediaQuery()

  useEffect(() => {
    isMobile ? setShowLineNumbers(false) : setShowLineNumbers(true)
  }, [isMobile])

  return (
    <div className="pr-60 sm:p-0 h-full w-full relative">
      <div className="w-full h-full relative">
        <Editor
          className={cn('', {
            invisible: !isEditorReady,
          })}
          loading={
            <Overlay isActive={true} className="flex relative w-full h-full">
              <Loading className="size-10 sm:size-14 text-primary" />
            </Overlay>
          }
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
      </div>
      <EditorSettings />
      <EditorSettings isMobileVersion />
    </div>
  )
}
