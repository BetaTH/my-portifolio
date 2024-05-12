import 'server-only'
import { createSession, getSession } from '../sessions'
import { cache } from 'react'

export const verifySession = cache(async () => {
  const session = await getSession()
  if (session.hasSession) {
    await createSession(session.username)
    return session
  } else {
    return session
  }
})
