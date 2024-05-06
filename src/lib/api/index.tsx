import { AwsClient } from 'aws4fetch'
import { env } from '../utils/env'

export async function api(endpoint: string, init: RequestInit) {
  const client = new AwsClient({
    accessKeyId: env.ACCESS_KEY_ID,
    secretAccessKey: env.SECRET_ACCESS_KEY,
  })

  return await client.fetch(`${env.API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...init,
  })
}
