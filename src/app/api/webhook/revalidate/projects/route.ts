import { revalidateTag } from 'next/cache'
import { PutPortfolioProjectsData } from '@/lib/services/put-portfolio-projects-data'
import { env } from '@/lib/utils/env'
import { NextResponse, NextRequest } from 'next/server'
import { ZodError, z } from 'zod'

const projectSchema = z.object({
  projects: z.array(
    z.object({
      title: z.string(),
      stack: z.string(),
      description: z.string(),
      linkCode: z.string(),
      linkDeploy: z.string(),
      img: z.string(),
    }),
  ),
  projectsInDevelopment: z.array(
    z.object({
      title: z.string(),
      stack: z.string(),
      description: z.string(),
      linkCode: z.string(),
    }),
  ),
})

const revalidateProjectsSchema = z.object({
  revalidateKey: z.string(),
  data: z
    .object({
      en: projectSchema,
      pt: projectSchema,
    })
    .optional(),
})

export async function PUT(request: NextRequest) {
  const data = await request.json()
  let dataParsed: z.infer<typeof revalidateProjectsSchema>
  try {
    dataParsed = revalidateProjectsSchema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Request validation error' },
        { status: 400 },
      )
    }
    return NextResponse.json(
      { message: 'Some error on revalidating' },
      { status: 500 },
    )
  }
  if (dataParsed.revalidateKey !== env.REVALIDATE_KEY) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  try {
    if (dataParsed.data) {
      await PutPortfolioProjectsData({ data: dataParsed.data })
    }
  } catch (e) {
    return NextResponse.json(
      { message: 'Some error on revalidating' },
      { status: 500 },
    )
  }

  revalidateTag('projects')
  return NextResponse.json({ message: 'Revalidate success' }, { status: 200 })
}
