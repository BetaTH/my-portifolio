'use client'

import { CustomToast } from '@/components/layout/toast'
import toast from 'react-hot-toast'

export function useToast() {
  function showErrorToast(message: string) {
    toast.custom((t) => {
      return (
        <CustomToast
          title="Error"
          message={message}
          feedback="error"
          isVisible={t.visible}
        />
      )
    })
  }

  function showSuccessToast(message: string) {
    toast.custom((t) => {
      return (
        <CustomToast
          title="Success"
          message={message}
          feedback="success"
          isVisible={t.visible}
        />
      )
    })
  }

  function showToast(title: string, message: string) {
    toast.custom((t) => {
      return (
        <CustomToast title={title} message={message} isVisible={t.visible} />
      )
    })
  }

  return {
    showToast,
    showSuccessToast,
    showErrorToast,
  }
}
