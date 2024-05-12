'use client'
import { ButtonLoading } from '@/components/buttons/button-loading'
import { Input } from '@/components/input'
import { CustomToast } from '@/components/layout/toast'
import { loginSchema } from '@/lib/schemas/login-schema'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { z } from 'zod'

export default function Login() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setInputData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit() {
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
      if (res.ok) {
        router.push('/admin/editor')
      } else {
        toast.custom(() => {
          return (
            <CustomToast
              title={`Error`}
              message={response.message}
              feedback="error"
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="bg-body flex h-screen sm:h-svh px-6">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        className="m-auto bg-gray-800/80 border-gray-200/10 shadow-xl border rounded-xl py-10 px-6 "
      >
        <div className="flex flex-col gap-6 max-w-[20rem] m-auto">
          <h1 className="mb-4 text-3xl/8">Access your account!</h1>
          <Input
            type="text"
            name="username"
            label="Username"
            value={inputData.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={inputData.password}
            onChange={handleChange}
          />
          <ButtonLoading
            isLoading={isLoading}
            disabled={isLoading}
            className="2md:text-base py-2 mt-3"
          >
            Login
          </ButtonLoading>
        </div>
      </form>
    </main>
  )
}
