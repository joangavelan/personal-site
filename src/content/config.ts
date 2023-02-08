import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    site_url: z.string(),
    github_url: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
  })
})

export const collections = { projects }
