import { revalidatePath } from 'next/cache'
import { env } from '@/lib/utils/env'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== env.REVALIDATE_KEY) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  revalidatePath('/', 'page')
  return NextResponse.json(
    { revalidated: true, now: new Date() },
    { status: 200 },
  )
}
