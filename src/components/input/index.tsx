'use client'
import { InputHTMLAttributes, useState } from 'react'
import { EyeOff } from '../svg-components/eye-off'
import { Eye } from '../svg-components/eye'
import { cn } from '@/lib/utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  full?: boolean
  label?: string
}

export function Input({
  label,
  type = 'text',
  full = true,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  function onHandleChangePasswordVisibility() {
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible)
  }

  return (
    <div className={`flex flex-col gap-1 ${full ? 'w-full' : 'w-fit'}`}>
      <label className="dark:text-body-text text-gray-700 text-lg/5">
        {label}
      </label>
      <div
        className={
          'flex w-full border-gray-200/50 focus-within:border-primary bg-white dark:bg-gray-600 overflow-hidden sm:rounded-lg rounded-xl border transition-all duration-300'
        }
      >
        <input
          type={isPasswordVisible ? 'text' : type}
          className={cn(
            'outline-none py-2 px-2 text-gray-600 dark:text-gray-100 text-base w-full bg-transparent',
          )}
          {...props}
        />

        {type === 'password' &&
          (!isPasswordVisible ? (
            <Eye
              className={`hover:opacity-80 duration-100 size-5 my-auto mx-2 text-title-body`}
              onClick={onHandleChangePasswordVisibility}
            />
          ) : (
            <EyeOff
              className={`hover:opacity-80 duration-100 size-5 my-auto mx-2 text-title-body`}
              onClick={onHandleChangePasswordVisibility}
            />
          ))}
      </div>
    </div>
  )
}
