import { Router } from "../../../deps.ts";

export const userRouter = new Router();
userRouter
  .post("/user/create", (ctx) => {
    ctx.response.body = "created user!!";
  })
  .get("/user/:userId", (ctx) => {
    ctx.response.body = `userId: ${ctx.params.userId}`;
  });
