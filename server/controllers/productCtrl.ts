import { z } from "zod";
import { router, publicProcedure } from "../trpc/trpc";

export const productCtrl = router({
  getProduct: publicProcedure.input(z.object({ id: z.string() })).query(({ input }) => {
    // Fetch product by ID logic
    return { id: input.id, name: "Sample Product", price: 100 };
  }),
  createProduct: publicProcedure
    .input(z.object({ name: z.string(), price: z.number() }))
    .mutation(({ input }) => {
      // Create product logic
      return { id: "123", name: input.name, price: input.price };
    }),
});
