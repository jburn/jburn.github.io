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
        links: z.array(z.object({
            label: z.string().trim().min(1),
            url: z.url(),
        })).default([]),
        order: z.number().default(100),
    })
});

export const collections = { projects };
