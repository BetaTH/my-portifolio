import { PutPortfolioProjectsData } from '@/lib/services/put-portfolio-projects-data'
import { projectsSchema } from '@/lib/shemas/portfolio-project-schema'
import { env } from '@/lib/utils/env'
import { revalidatePath } from 'next/cache'
import { NextResponse, NextRequest } from 'next/server'
import { ZodError, z } from 'zod'

export async function PUT(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (secret !== env.REVALIDATE_KEY) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  const data = await request.json()
  let dataParsed: z.infer<typeof projectsSchema>

  try {
    dataParsed = projectsSchema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Request validation error', error: true },
        { status: 400 },
      )
    }
    return NextResponse.json(
      { message: 'Some error on validation' },
      { status: 400 },
    )
  }

  try {
    await PutPortfolioProjectsData({ data: dataParsed })
  } catch (e) {
    return NextResponse.json(
      { message: 'Some error on revalidating', error: true },
      { status: 500 },
    )
  }

  revalidatePath('/', 'layout')
  return NextResponse.json(
    { revalidated: true, now: new Date() },
    { status: 200 },
  )
}
