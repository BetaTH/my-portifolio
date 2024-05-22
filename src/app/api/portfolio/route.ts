import { z } from 'zod'

import { revalidatePath } from 'next/cache'
import { projectsSchema } from '@/lib/schemas/portfolio-project-schema'
import { verifySession } from '@/lib/dal'
import { PutPortfolioProjectsData } from '@/lib/services/put-portfolio-projects-data'

export async function PUT(req: Request) {
  const session = await verifySession()
  if (!session.hasSession) {
    return Response.json(
      { error: true, message: 'unauthorized' },
      { status: 401 },
    )
  }

  const data = await req.json()
  let dataParsed: z.infer<typeof projectsSchema>

  try {
    dataParsed = projectsSchema.parse(data)
  } catch (error) {
    return Response.json(
      { error: true, message: 'Data validation error' },
      { status: 400 },
    )
  }

  try {
    await PutPortfolioProjectsData({ data: dataParsed })
  } catch (e) {
    return Response.json(
      { error: true, message: 'Some error on update portfolio data' },
      { status: 500 },
    )
  }

  revalidatePath('/', 'layout')
  return Response.json({ error: false, message: 'success' }, { status: 200 })
}

export async function GET() {
  const session = await verifySession()
  if (!session.hasSession) {
    return Response.json(
      { error: true, message: 'unauthorized' },
      { status: 401 },
    )
  }

  revalidatePath('/', 'layout')
  return Response.json({ error: false, message: 'success' }, { status: 200 })
}
