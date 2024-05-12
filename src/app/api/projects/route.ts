import { PutPortfolioProjectsData } from '@/lib/services/put-portfolio-projects-data'
import { projectsSchema } from '@/lib/schemas/portfolio-project-schema'
import { revalidatePath } from 'next/cache'
import { NextResponse, NextRequest } from 'next/server'
import { ZodError, z } from 'zod'
import { verifySession } from '@/lib/dla'

export async function PUT(request: NextRequest) {
  const session = await verifySession()

  if (!session.isAuth) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 200 })
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
