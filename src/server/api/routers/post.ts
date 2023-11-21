import {db} from "~/server/db"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const postRouter = createTRPCRouter({
  getAll : publicProcedure.query(()=>{
    return db.post.findMany()
  }),

  create: publicProcedure
    .input(
      z.object({
        content: z.string(),
        id : z.string(),
      })
    )
    .mutation(async ({ctx,input }) => {

      const post = await ctx.db.post.create({
        data: {
          authorId : input.id,
          content: input.content,
        },
      });

      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  delete : publicProcedure
    .input(
      z.object({
        id : z.string(),
      })
    )

    .mutation(async ({ input }) => {
      try {
        const deletePost = await db.post.delete({
          where: {
            id: input.id, 
          },
        });
    
        return deletePost;
      } catch (error) {
        console.error('Error deleting post:', error);
        throw new Error('Unable to delete post');
      }
    }),

    getPostsByUserId: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(({ ctx, input }) =>
      ctx.db.post
        .findMany({
          where: {
            authorId: input.userId,
          },
          orderBy: [{ createdAt: "desc" }],
        })
    ),
    
    getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { id: input.id },
      });
      return post;
    }),
});
