'use server'

import { revalidatePath } from 'next/cache'
import { verifySession } from '../dal'

export async function revalidatePortfolioData() {
  const session = await verifySession()

  if (!session.hasSession) {
    return { status: 401, error: true, message: 'unauthorized' }
  }

  revalidatePath('/', 'layout')
  return { status: 200, error: false, message: 'success' }
}
