import { env } from '@/lib/utils/env'
import { NextResponse, NextRequest } from 'next/server'
import { ZodError, z } from 'zod'
import { createSession } from '@/lib/sessions'
import { loginSchema } from '@/lib/schemas/login-schema'

const adminPassword = env.ADMIN_PASSWORD
const adminUsername = env.ADMIN_USER_NAME

export async function POST(request: NextRequest) {
  const data = await request.json()
  let dataParsed: z.infer<typeof loginSchema>
  try {
    dataParsed = loginSchema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Request validation error', error: true },
        { status: 403 },
      )
    }
    return NextResponse.json(
      { message: 'Some error on validation' },
      { status: 403 },
    )
  }

  const { username, password } = dataParsed

  if (username !== adminUsername || password !== adminPassword) {
    return NextResponse.json(
      { message: 'Invalid credentials!' },
      { status: 400 },
    )
  }
  await createSession(username)

  return NextResponse.json({}, { status: 200 })
}
