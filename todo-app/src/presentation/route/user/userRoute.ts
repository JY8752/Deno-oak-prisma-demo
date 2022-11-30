import { userService } from "../../../application/service/user/userService.ts";
import { Router } from "../../../deps.ts";
import { getBodyValue } from "../routeUtils.ts";
import { response } from "../response.ts";
import { assertError } from "../routeUtils.ts";
import { getQuery } from "https://deno.land/x/oak@v11.1.0/helpers.ts";

type CreateUserRequest = {
  name: string;
  age: number;
};

export const userRouter = new Router();
userRouter
  .post("/user/create", async (ctx) => {
    try {
      const body = ctx.request.body({ type: "json" });
      const { name, age } = await getBodyValue<CreateUserRequest>(body);

      const result = await userService.create(name, age);
      ctx.response.body = response.success(result);
    } catch (e: unknown) {
      assertError(e);
      ctx.response.body = response.error(e.message);
    }
  })
  .get("/user/:userId", async (ctx) => {
    try {
      const { userId } = getQuery(ctx, { mergeParams: true });
      const result = await userService.get(Number(userId));
      ctx.response.body = response.success(result);
    } catch (e: unknown) {
      assertError(e);
      ctx.response.body = response.error(e.message);
    }
  });
