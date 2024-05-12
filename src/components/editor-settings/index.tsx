'use client'
import { cn } from '@/lib/utils/cn'
import { Button } from '../buttons/button'
import { Settings } from '../svg-components/settings'
import { useContext, useState } from 'react'
import { Overlay } from '../layout/overlay'
import { LinkButton } from '../buttons/link-button'
import { Logout } from '../svg-components/logout'
import { X } from '../svg-components/x'
import { EditorContentContext } from '@/contexts/editor-content-context'
import { UpdatePortfolioDataContext } from '@/contexts/update-portfolio-data-context'

interface EditorSettingsProps {
  isMobileVersion?: boolean
}

export function EditorSettings({
  isMobileVersion = false,
}: EditorSettingsProps) {
  const { handleFormatDocument } = useContext(EditorContentContext)
  const { isSaving, handleSaveData } = useContext(UpdatePortfolioDataContext)

  const [isActive, setIsActive] = useState(false)
  function toggleSettings() {
    setIsActive((prev) => !prev)
  }

  async function handleLogout() {
    await fetch('/api/auth/logout')
  }

  return (
    <>
      <Overlay
        isActive={isActive}
        toggle={toggleSettings}
        className="sm:block sm:z-[200]"
      />
      <div
        className={cn(
          'bg-body border-gray-200/50 gap-6 flex right-0 top-0 h-full flex-col items-center py-10 px-5 border-l w-60',
          {
            'absolute sm:hidden': !isMobileVersion,
            'hidden sm:flex fixed translate-y-0 visible transition-all duration-300 w-full z-[210] h-[50%] top-auto bottom-0 rounded-t-3xl border px-10 pt-14':
              isMobileVersion,
            'translate-y-full invisible': isMobileVersion && !isActive,
          },
        )}
      >
        <X
          className="size-9 hidden sm:block absolute top-5 right-5"
          onClick={toggleSettings}
        />
        <p className="text-2xl border-b border-primary w-full text-center pb-1 sm:pb-3">
          Settings
        </p>
        <Button
          disabled={isSaving}
          onClick={() => {
            handleSaveData()
            isMobileVersion && toggleSettings()
          }}
          className="w-full"
        >
          Save
        </Button>
        <Button
          disabled={isSaving}
          onClick={() => {
            handleFormatDocument()
            isMobileVersion && toggleSettings()
          }}
          className="w-full"
        >
          Format
        </Button>
        <LinkButton asChild>
          <button className="mt-auto" onClick={handleLogout}>
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
