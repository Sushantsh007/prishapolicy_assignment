import { trpc } from "../lib/trpc";
import { string, z } from "zod";
import { prisma } from "../lib/prismaClient";

export const bookRouter = trpc.router({
  create: trpc.procedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        authors: z.string(),
        fileName: z.string(),
        imageName: z.string(),
        time: z.string()
      })
    )
    .mutation(({ input }) => {
      const title = input.title;
      const file = input.fileName;
      const image = input.imageName;
      const authors = input.authors;
      const description = input.description;
      const time = input.time
      // console.log({title, file,image, authors, description});
      
      return prisma.book.create({
        data: {
          title: title,
          file: file,
          image: image,
          authors: authors,
          description: description,
          time: time
        }
      });
    }),

  list: trpc.procedure.query(async () => {
    return await prisma.book.findMany();
  }),

  filter: trpc.procedure
  .input(z.unknown())
  .query(async ({ input }) => {
    return await prisma.book.findMany({
      where: {
        id: String(input)
      }
    })
  })

});
