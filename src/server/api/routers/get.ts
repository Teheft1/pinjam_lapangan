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
});
