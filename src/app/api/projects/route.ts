import { PutPortfolioProjectsData } from '@/lib/services/put-portfolio-projects-data'
import { env } from '@/lib/utils/env'
import { revalidatePath } from 'next/cache'
import { NextResponse, NextRequest } from 'next/server'
import { ZodError, z } from 'zod'

const projectSchema = z.object({
  projects: z.array(
    z.object({
      title: z.string(),
      stack: z.string(),
      description: z.object({
        en: z.string(),
        pt: z.string(),
      }),
      linkCode: z.string(),
      linkDeploy: z.string().optional(),
      img: z.string(),
    }),
  ),
  projectsInDevelopment: z.array(
    z.object({
      title: z.string(),
      stack: z.string(),
      description: z.object({
        en: z.string(),
        pt: z.string(),
      }),
      linkCode: z.string(),
    }),
  ),
})

export async function PUT(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (secret !== env.REVALIDATE_KEY) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  const data = await request.json()
  let dataParsed: z.infer<typeof projectSchema>

  try {
    dataParsed = projectSchema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Request validation error' },
        { status: 400 },
      )
    }
    return NextResponse.json(
      { message: 'Some error on validation' },
      { status: 500 },
    )
  }

  try {
    await PutPortfolioProjectsData({ data: dataParsed })
  } catch (e) {
    return NextResponse.json(
      { message: 'Some error on revalidating' },
      { status: 500 },
    )
  }

  revalidatePath('/', 'layout')
  return NextResponse.json(
    { revalidated: true, now: new Date() },
    { status: 200 },
  )
}
