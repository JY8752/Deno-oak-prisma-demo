import { Application } from "https://deno.land/x/oak@v11.1.0/application.ts";
import { userRouter } from "./presentation/route/user/userRoute.ts";

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  console.log(
    `method: ${ctx.request.method} url: ${ctx.request.url} body: ${ctx.request.body().value}`,
  );
  await next();
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

await app.use(userRouter.routes())
  .listen({ port: 8000 });
