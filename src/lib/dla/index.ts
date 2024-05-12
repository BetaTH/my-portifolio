'use server'
import 'server-only'
import { createSession, verifyToken } from '../sessions'
import { cookies } from 'next/headers'

export const verifySession = async () => {
  const cookie = cookies().get('session')?.value
  const session = await verifyToken(cookie)
  const hasSession = session ? !!session.username : false
  if (hasSession && session) {
    await createSession(session.username)

    return { isAuth: true, username: session.username }
  } else {
    return { isAuth: false, username: undefined }
  }
}
