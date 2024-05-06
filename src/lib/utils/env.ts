import { config } from 'dotenv'
import { ZodError, z } from 'zod'

config()

const envSchema = z.object({
  API_BASE_URL: z.string().url(),
  ACCESS_KEY_ID: z.string(),
  SECRET_ACCESS_KEY: z.string(),
  REVALIDATE_KEY: z.string(),
})

export let env: z.infer<typeof envSchema>

try {
  env = envSchema.parse(process.env)
} catch (error) {
  if (error instanceof ZodError) {
    console.error(
      'Environment variables was not defined:',
      error.formErrors.fieldErrors,
    )
  }
}
