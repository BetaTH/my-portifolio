import { cache } from 'react'
import { verifyToken } from '../sessions'
import { cookies } from 'next/headers'

export const verifySession = cache(async () => {
  const cookie = cookies().get('session')?.value
  const session = await verifyToken(cookie)
  const hasSession = session ? !!session.username : false
  if (hasSession && session) {
    return { isAuth: true, username: session.username }
  } else {
    return undefined
  }
})
