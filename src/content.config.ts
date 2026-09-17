import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({
        pattern: '**/**.md',
        base: './src/content/projects',
    }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        github: z.url().optional(),
        order: z.number().default(100),
    })
});

export const collections = { projects };