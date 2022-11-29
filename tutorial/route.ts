import { Application } from "https://deno.land/x/oak@v11.1.0/application.ts";
import { Router } from "https://deno.land/x/oak@v11.1.0/router.ts";

const userRouter = new Router()
userRouter
  .post("/user/create", ctx => {
    ctx.response.body = 'created user!!'
  })
  .get("/user/:userId", ctx => {
    ctx.response.body = `userId: ${ctx.params.userId}`
  })

const bookRouter = new Router()
bookRouter
  .post("/book/create", ctx => {
    ctx.response.body = 'created book!!'
  })
  .get("/book/:bookId", ctx => {
    ctx.response.body = `bookId: ${ctx.params.bookId}`
  })
  
await new Application()
  .use(userRouter.routes())
  .use(bookRouter.routes())
  .listen({ port: 8000 })
