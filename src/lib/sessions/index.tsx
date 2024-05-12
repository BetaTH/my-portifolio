import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const secretKey = process.env.JWT_SECRET_KEY
const encodedKey = new TextEncoder().encode(secretKey)

type SessionPayload = {
  username: string
  expiresAt: Date
}

export async function createToken(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(payload.expiresAt)
    .sign(encodedKey)
}

export async function verifyToken(token: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload as SessionPayload
  } catch (error) {
    console.log('Failed to verify session')
  }
}

function createExpiresAt() {
  const days = 7 * 24 * 60 * 60 * 1000 // time in milliseconds
  const expiresAt = new Date(Date.now() + days)
  return expiresAt
}

export async function createSession(username: string) {
  const expiresAt = createExpiresAt()
  const token = await createToken({ username, expiresAt })

  cookies().set('session', token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'strict',
    path: '/',
  })
}

export async function getSession() {
  const cookie = cookies().get('session')?.value
  const session = await verifyToken(cookie)
  const hasSession = session ? !!session.username : false
  if (hasSession && session) {
    const right: {
      hasSession: true
      username: string
    } = { hasSession: true, username: session.username }
    return right
  } else {
    const left: {
      hasSession: false
      username: undefined
    } = { hasSession: false, username: undefined }
    return left
  }
}

export async function updateSessionMiddleware(
  username: string,
  res?: NextResponse,
) {
  const response = res || NextResponse.next()
  const expiresAt = createExpiresAt()
  const token = await createToken({ username, expiresAt })
  response.cookies.set({
    name: 'session',
    value: token,
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'strict',
    path: '/',
  })
  return response
}

export function deleteSession() {
  cookies().delete('session')
}
