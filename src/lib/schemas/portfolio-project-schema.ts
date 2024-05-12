import { z } from 'zod'
export const projectsSchema = z.object({
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
