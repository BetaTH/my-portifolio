import { z } from 'zod'
export const loginSchema = z.object({
  username: z.string().trim().min(5),
  password: z.string().trim().min(5),
})
