import {
  Prisma,
  Todo,
} from "../../../../generated/infrastructure/client/deno/edge.ts";
import { TodoRepository } from "../../../domain/repository/todo/todoRepository.ts";
import { prisma } from "../prismaClient.ts";

const save = async (data: Prisma.TodoCreateInput): Promise<Todo> => {
  return await prisma.todo.create({ data });
};

const getAll = async (userId: number): Promise<Todo[]> => {
  return await prisma.todo.findMany({ where: { userId } });
};

export const todoRepository: TodoRepository = {
  save,
  getAll,
};
