import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    toc: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    language: z.enum(['en', 'ar']).optional(),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    toc: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    language: z.enum(['en', 'ar']).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { writing, projects };
