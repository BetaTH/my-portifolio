'use client'
import { cn } from '@/lib/utils/cn'
import { Button } from '../buttons/button'
import { Settings } from '../svg-components/settings'
import { useState } from 'react'
import { Overlay } from '../layout/overlay'
import { LinkButton } from '../buttons/link-button'
import { Logout } from '../svg-components/logout'
import { X } from '../svg-components/x'

interface EditorSettingsProps {
  handleSave: () => void
  handleFormatDocument: () => void
}

export function EditorSettings({
  handleSave,
  handleFormatDocument,
}: EditorSettingsProps) {
  const [isActive, setIsActive] = useState(false)
  function toggleSettings() {
    setIsActive((prev) => !prev)
  }
  return (
    <>
      <Overlay
        isActive={isActive}
        toggle={toggleSettings}
        className="sm:block"
      />
      <div
        className={cn(
          ' absolute bg-body right-0 top-0 h-full w-60 flex flex-col items-center gap-6 py-10 px-5 border-l border-gray-200/50',
          'sm:fixed sm:translate-y-0 visible sm:transition-all sm:duration-300 sm:w-full z-50 sm:h-[50%] sm:top-auto sm:bottom-0 sm:rounded-t-3xl sm:border sm:px-10 sm:pt-14',
          { 'sm:translate-y-full sm:invisible': !isActive },
        )}
      >
        <X
          className="size-9 hidden sm:block absolute top-5 right-5"
          onClick={toggleSettings}
        />
        <p className="text-2xl border-b border-primary w-full text-center pb-1 sm:pb-3">
          Settings
        </p>
        <Button onClick={handleSave} className="w-full">
          Save
        </Button>
        <Button onClick={handleFormatDocument} className="w-full">
          Format
        </Button>
        <LinkButton asChild>
          <button className="mt-auto ">
            Logout
            <Logout className="size-4 sm:size-5" />
          </button>
        </LinkButton>
      </div>

      <Button className="hidden sm:block fixed bottom-10 right-10 z-40 sm:rounded-full sm:p-3 shadow-settings">
        <Settings
          className={cn('size-10 transition-transform duration-300', {
            'rotate-180': isActive,
          })}
          onClick={toggleSettings}
        />
      </Button>
    </>
  )
}
