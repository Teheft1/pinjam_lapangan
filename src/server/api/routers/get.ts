import { number, z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const dataRouter = createTRPCRouter({
  getLapangan: publicProcedure.query(() => {
    return db.lapangan.findMany({
      orderBy: { id_lapangan: "asc" },
    });
  }),
  getHistory: protectedProcedure.query(({ ctx }) => {
    return ctx.db.transaksi.findMany({
      where: { user_id: ctx.session?.user.id },
    });
  }),
  getoneInvoice: protectedProcedure.query(({ctx})=>{
    return ctx.db.transaksi.findFirst({
        orderBy: { id_trans: "desc" },
    })
  })
});
