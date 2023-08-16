import { trpc } from "../lib/trpc";
import { bookRouter } from "./bookRouter";

export const appRouter = trpc.router({
    book: bookRouter
});

export type AppRouter = typeof appRouter;