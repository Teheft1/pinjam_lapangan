import * as Midtrans from "midtrans-client";
// Step 1: Install the Midtrans Node.js client library
// npm install midtrans-client
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
// import { db } from "~/server/db";
import { env } from "~/env";

export const tokenizeRouter = createTRPCRouter({
  getToken: publicProcedure
    .input(
      z.object({
        id_invoice: z.string(),
        harga: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const snap = new Midtrans.Snap({
        isProduction: false,
        serverKey: env.MIDTRANS_SERVER_KEY,
        clientKey: env.MIDTRANS_CLIENT_KEY,
      });
      const parameter = {
        transaction_details: {
          order_id: input.id_invoice,
          gross_amount: input.harga,
        },
      };
      //   await new Promise((resolve) => setTimeout(resolve, 1000));

      const token = await snap.createTransactionToken(parameter);
      console.log(token);

      return token;
    }),
  getStatus: protectedProcedure
    .input(
      z.object({
        order_id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      // const snap = new Midtrans.CoreApi({
      //   isProduction: false,
      //   serverKey: env.MIDTRANS_SERVER_KEY,
      //   clientKey: env.MIDTRANS_CLIENT_KEY,
      // });
      const serverKey = env.MIDTRANS_SERVER_KEY;
      const encodedKey = Buffer.from(serverKey + ":").toString("base64");
      const url = await fetch(
        `https://api.sandbox.midtrans.com/v2/${input.order_id}/status`,
        {
          headers:{
            'Authorization': 'Basic ' + encodedKey,
          }
        }
      );

      return url.json();
    }),
});
