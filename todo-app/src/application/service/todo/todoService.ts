import { Todo } from "../../../domain/model/todo/model.ts";
import { Todo as TodoEntity } from "../../../../generated/infrastructure/client/deno/index.d.ts";
import { todoRepository } from "../../../infrastructure/data/todo/todoRepository.ts";

const create = async (
  data: { userId: number; title: string; description: string },
): Promise<Todo> => {
  const { userId, title, description } = data;
  const todo = await todoRepository.save({
    owner: { connect: { id: userId } },
    title,
    description,
  });
  return toModel(todo);
};

const getAll = async (userId: number): Promise<Todo[]> => {
  const todos = await todoRepository.getAll(userId);
  return todos.map((entity) => toModel(entity));
};

const toModel = (entity: TodoEntity): Todo => {
  return {
    id: entity.id.toString(),
    userId: entity.userId.toString(),
    title: entity.title,
    description: entity.description,
  };
};

export type CreateTodo = { userId: number; title: string; description: string };
export type TodoService = {
  create: (data: CreateTodo) => Promise<Todo>;
  getAll: (userId: number) => Promise<Todo[]>;
};

export const todoService: TodoService = {
  create,
  getAll,
};
