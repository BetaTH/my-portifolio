'use client'
import { Button } from '@/components/buttons/button'
import { Input } from '@/components/input'
import { CustomToast } from '@/components/layout/toast'
import { loginSchema } from '@/lib/schemas/login-schema'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { z } from 'zod'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit() {
    const loginData = {
      username,
      password,
    }
    let loginDataParsed: z.infer<typeof loginSchema>

    try {
      loginDataParsed = loginSchema.parse(loginData)
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDataParsed),
      })
      const response = await res.json()
      if (!res.ok) {
        toast.custom(() => {
          return (
            <CustomToast
              title={`${res.status} Error`}
              message={response.message}
              feedback="error"
            />
          )
        })
      } else {
        toast.custom(() => {
          return (
            <CustomToast
              title="Success"
              message="Portfolio data saved"
              feedback="success"
            />
          )
        })
      }
    } catch {
      toast.custom(() => {
        return (
          <CustomToast
            title="Error"
            message="Data validation error"
            feedback="error"
          />
        )
      })
    }
  }

  return (
    <main className="bg-body flex h-screen sm:h-svh">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        className="m-auto flex flex-col gap-6 bg-gray-800/85 border-gray-200/50 border rounded-xl py-16 px-20"
      >
        <h1 className="mb-4 text-3xl/8">Access your account!</h1>
        <Input
          type="text"
          name="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          name="username"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="2md:text-base">Login</Button>
      </form>
    </main>
  )
}
