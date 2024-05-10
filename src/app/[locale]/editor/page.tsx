'use client'
import Editor from '@monaco-editor/react'

export default function EditorPage() {
  return (
    <main id={'home'} className="bg-body pt-[4.75rem] h-screen">
      <div className="min-h-full h-fit flex w-full justify-center">
        <Editor
          height="50vh"
          width="50%"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme="vs-dark"
        />
      </div>
    </main>
  )
}
