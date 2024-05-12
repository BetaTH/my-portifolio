import { verifySession } from '@/lib/dla'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await verifySession()

  if (!session.isAuth) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 200 })
  }

  revalidatePath('/', 'layout')
  return NextResponse.json(
    { revalidated: true, now: new Date() },
    { status: 200 },
  )
}
