'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { loginSchema } from '../schemas/login-schema'
import { useToast } from './useToast'
import { z } from 'zod'

export function useAuth() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { showErrorToast } = useToast()

  async function handleLogin(inputData: z.infer<typeof loginSchema>) {
    setIsLoading(true)
    let loginDataParsed: z.infer<typeof loginSchema>

    try {
      loginDataParsed = loginSchema.parse(inputData)
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDataParsed),
      })
      const response = await res.json()
      if (res.ok && res.status === 200) {
        router.replace('/admin/editor')
      } else {
        showErrorToast(response.message)
      }
    } catch {
      showErrorToast('Data validation error')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleLogout() {
    const res = await fetch('/api/auth/logout')
    if (res.ok && res.status === 200) {
      router.replace('/admin')
    }
  }

  return {
    handleLogin,
    handleLogout,
    isLoading,
  }
}
