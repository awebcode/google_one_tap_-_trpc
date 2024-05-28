import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./trpc/trpc";
import { appRouter } from "./trpc/appRouter";
import cors from "cors"
const app = express();
const port = 5000;
app.use(cors());
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
export type AppRouter = typeof appRouter;
