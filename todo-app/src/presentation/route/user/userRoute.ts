import { userService } from "../../../application/service/user/userService.ts";
import { Router } from "../../../deps.ts";

type CreateUserRequest = {
  name: string;
  age: number;
};

export const userRouter = new Router();
userRouter
  .post("/user/create", async (ctx) => {
    const body = ctx.request.body();
    const { name, age }: CreateUserRequest = await body.value;
    const result = userService.create(name, age);
    ctx.response.body = result;
  })
  .get("/user/:userId", (ctx) => {
    ctx.response.body = `userId: ${ctx.params.userId}`;
  });
