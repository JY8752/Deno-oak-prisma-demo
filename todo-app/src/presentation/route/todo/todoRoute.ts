import { Status } from "https://deno.land/std@0.152.0/http/http_status.ts";
import { todoService } from "../../../application/service/todo/todoService.ts";
import { Router } from "../../../deps.ts";
import { response } from "../response.ts";
import { assertError, getBodyValue } from "../routeUtils.ts";

type CreateTodoRequest = {
  userId: number;
  title: string;
  description: string;
};

export const todoRouter = new Router();
todoRouter
  .post("/todo/create", async (ctx) => {
    try {
      const body = ctx.request.body({ type: "json" });
      const request = await getBodyValue<CreateTodoRequest>(body);

      const result = await todoService.create(request);
      ctx.response.body = response.success(result);
    } catch (e: unknown) {
      assertError(e);
      ctx.response.body = response.error(e.message);
    }
  })
  .get("/todo/all", async (ctx) => {
    const userId = ctx.request.url.searchParams.get("userId");
    console.log(userId);
    if (userId) {
      try {
        const result = await todoService.getAll(Number(userId));
        ctx.response.body = response.success(result);
      } catch (e: unknown) {
        assertError(e);
        ctx.response.body = response.error(e.message);
      }
    } else {
      ctx.throw(Status.BadRequest, "not found 'userId' query parameter.");
    }
  });
