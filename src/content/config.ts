import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string()
      })
      .optional(),
    related: z.array(reference("blog")).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
