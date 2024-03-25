import { number, z } from "zod";
import { useRouter } from "next/router";
// const Midtrans: any = require("midtrans-client");
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const dataRouter = createTRPCRouter({
  // getLapangan: publicProcedure.query(() => {
  //   return db.lapangan.findMany({
  //     orderBy: { id_lapangan: "asc" },
  //   });
  // }),
  getHistory: protectedProcedure.query(({ ctx }) => {
    return ctx.db.transaksi.findMany({
      where: { user_id: ctx.session?.user.id },
    });
  }),
  getoneInvoice: protectedProcedure.query(({ ctx }) => {
    return ctx.db.transaksi.findFirst({
      orderBy: { id_trans: "desc" },
    });
  }),
  getlapbyHardfloor: publicProcedure.query(() => {
    return db.lapangan.findMany({
      where: { jenis_lapangan: "Hardfloor" },
    });
  }),
  getlapbybadminton: publicProcedure.query(() => {
    return db.lapangan.findMany({
      where: { jenis_lapangan: "Badminton" },
    });
  }),
  getlapbysintetis: publicProcedure.query(() => {
    return db.lapangan.findMany({
      where: { jenis_lapangan: "Sintetis" },
    });
  }),
  // getToken: publicProcedure.query(async () => {
  //   const snap = new Midtrans.Snap({
  //     isProduction: false,
  //     serverKey: process.env.MIDTRANS_SERVER_KEY,
  //     clientKey: process.env.MIDTRANS_CLIENT_KEY,
  //   });

  //   const parameter = {
  //     transaction_details: {
  //       order_id: "order-id-node",
  //       gross_amount: 200000,
  //     },
  //   };

  //   const token = await snap.createTransaction(parameter);
  //   return token;
  // }),
});
