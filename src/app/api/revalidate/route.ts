// import { revalidatePath } from 'next/cache'
import { env } from '@/lib/utils/env'
import { revalidateTag } from 'next/cache'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== env.REVALIDATE_KEY) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  //   revalidatePath('/', 'layout')
  revalidateTag('projects')
  return NextResponse.json(
    { revalidated: true, now: new Date() },
    { status: 200 },
  )
}
