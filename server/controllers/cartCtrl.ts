import { z } from "zod";
import { router, publicProcedure } from "../trpc/trpc";

export const cartCtrl = router({
  getCart: publicProcedure.input(z.object({ userId: z.string() })).query(({ input }) => {
    // Fetch cart by user ID logic
    return { userId: input.userId, items: [] };
  }),
  addToCart: publicProcedure
    .input(z.object({ userId: z.string(), productId: z.string(), quantity: z.number() }))
    .mutation(({ input }) => {
      // Add to cart logic
      return {
        userId: input.userId,
        productId: input.productId,
        quantity: input.quantity,
      };
    }),
});
