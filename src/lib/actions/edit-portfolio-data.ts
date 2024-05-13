'use server'

import { verifySession } from '../dal'
import { PortfolioData } from '../types/portfolio-data'
import { z } from 'zod'
import { projectsSchema } from '../schemas/portfolio-project-schema'
import { PutPortfolioProjectsData } from '../services/put-portfolio-projects-data'
import { revalidatePath } from 'next/cache'

export async function editPortfolioData(data: PortfolioData): Promise<{
  error: boolean
  status: number
  message: string
}> {
  const session = await verifySession()

  if (!session.hasSession) {
    return { status: 401, error: true, message: 'unauthorized' }
  }

  let dataParsed: z.infer<typeof projectsSchema>

  try {
    dataParsed = projectsSchema.parse(data)
  } catch (error) {
    return {
      status: 400,
      error: true,
      message: 'Data validation error',
    }
  }

  try {
    await PutPortfolioProjectsData({ data: dataParsed })
  } catch (e) {
    return {
      status: 400,
      error: true,
      message: 'Some error on update portfolio data',
    }
  }

  revalidatePath('/', 'layout')
  return { status: 200, error: false, message: 'success' }
}
