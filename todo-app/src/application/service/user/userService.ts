import { User } from "../../../domain/model/user/user.ts";
import { userRepository } from "../../../infrastructure/data/user/userRepository.ts";

const create = (name: string, age: number): Promise<User> => {
  return userRepository.save({ name, age });
};

const get = (id: number): Promise<User | null> => {
  return userRepository.findById({ id });
};

export type UserService = {
  create: (name: string, age: number) => Promise<User>;
  get: (id: number) => Promise<User | null>;
};

export const userService: UserService = {
  create,
  get,
};
