import { z } from "zod";
import { router, publicProcedure } from "../trpc/trpc";

export const userCtrl = router({
  getUser: publicProcedure.input(z.object({ id: z.string() })).query(({ input }) => {
    // Fetch user by ID logic
    return { id: input.id, name: "John Doe" };
  }),
  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      // Create user logic
      return { id: "123", name: input.name };
    }),
});
