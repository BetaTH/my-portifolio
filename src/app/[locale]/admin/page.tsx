'use client'
import { ButtonLoading } from '@/components/buttons/button-loading'
import { Input } from '@/components/input'
import { useAuth } from '@/lib/hooks/useAuth'
import { ChangeEvent, useState } from 'react'

export default function Login() {
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  })
  const { handleLogin, isLoading } = useAuth()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setInputData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="dark:bg-body bg-gray-50 flex h-screen sm:h-svh px-6">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin(inputData)
        }}
        className="m-auto dark:bg-gray-800/80 bg-gray-200 border-gray-700/50 dark:border-gray-200/10 shadow-xl border rounded-xl py-10 px-6 "
      >
        <div className="flex flex-col gap-6 max-w-[20rem] m-auto">
          <h1 className="mb-4 text-3xl/8 dark:text-title text-body">
            Access your account!
          </h1>
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
