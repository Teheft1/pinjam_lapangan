import { number, z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";
import { time } from "console";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: ctx.session.user.id,
          updatedAt: new Date(),
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: ctx.session.user.id },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  getLapangan: publicProcedure.query(() => {
    return db.lapangan.findMany({
      orderBy: { id_lapangan: "asc" },
    });
  }),

  getlapid: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.lapangan.findUnique({
        where: { id_lapangan: input.id },
      });
    }),

  createPesan: protectedProcedure
    .input(
      z.object({
        id_lapangan: z.number(),
        // tanggal: z.string(),
        jam: z.date(),
        durasi: z.date(),
        subtotal: z.number() || undefined,
        grand_total: z.number() || undefined,
        id_invoice: z.string(),
        catatan: z.string(),
        // deadline: z.date(),
      }),
    )
    .query(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.transaksi.create({
        data: {
          id_lapangan: input.id_lapangan,
          id_invoice: input.id_invoice,
          // tanggal: new Date(input.tanggal),
          // jam: input.jam,
          // durasi: input.durasi,
          user_id: ctx.session.user.id,
          status: 1,
          created_date: new Date(),
          created_time: new Date(),
          subtotal: input.subtotal,
          diskon: 0,
          catatan: input.catatan,
          grand_total: input.grand_total,
          deadline: new Date(+1),
          updatedAt: new Date(),
        },
      });
    }),
});
