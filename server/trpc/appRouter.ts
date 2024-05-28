import { router } from "./trpc";
import { userCtrl } from "../controllers/userCtrl";
import { productCtrl } from "../controllers/productCtrl";
import { cartCtrl } from "../controllers/cartCtrl";

export const appRouter = router({
  user: userCtrl,
  product: productCtrl,
  cart: cartCtrl,
});

export type AppRouter = typeof appRouter;
