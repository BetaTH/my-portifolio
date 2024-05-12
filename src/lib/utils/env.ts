import { config } from 'dotenv'
import { ZodError, z } from 'zod'

config()

const envSchema = z.object({
  API_BASE_URL: z.string().url(),
  ACCESS_KEY_ID: z.string(),
  SECRET_ACCESS_KEY: z.string(),
  JWT_SECRET_KEY: z.string(),
  ADMIN_USER_NAME: z.string(),
  ADMIN_PASSWORD: z.string(),
  PORTFOLIO_DATA_FILE_NAME: z.string().optional(),
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
