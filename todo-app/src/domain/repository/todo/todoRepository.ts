import {
  Prisma,
  Todo,
} from "../../../../generated/infrastructure/client/deno/index.d.ts";

export type TodoRepository = {
  save: (data: Prisma.TodoCreateInput) => Promise<Todo>;
  getAll: (userId: number) => Promise<Todo[]>;
};
