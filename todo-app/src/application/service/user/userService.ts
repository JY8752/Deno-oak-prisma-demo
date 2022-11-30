import { User } from "../../../domain/model/user/user.ts";
import { userRepository } from "../../../infrastructure/data/user/userRepository.ts";

const create = async (name: string, age: number): Promise<User> => {
  const user = await userRepository.save({ name, age });
  return { id: user.id.toString(), name: user.name, age: user.age };
};

const get = async (id: number): Promise<User | null> => {
  const user = await userRepository.findById({ id });
  if (!user) return null;
  return { id: user.id.toString(), name: user.name, age: user.age };
};

export type UserService = {
  create: (name: string, age: number) => Promise<User>;
  get: (id: number) => Promise<User | null>;
};

export const userService: UserService = {
  create,
  get,
};
