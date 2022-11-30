import { Prisma } from "../../../../generated/infrastructure/client/deno/edge.ts";
import type { UserRepository } from "../../../domain/repository/user/userRepository.ts";
import { prisma } from "../prismaClient.ts";

// class UserRepositoryImpl implements UserRepository {
//   private static _instance: UserRepository

//   static getInstance(): UserRepository {
//     if(!this._instance) this._instance = new UserRepositoryImpl()
//     return this._instance
//   }

//   save() {}
//   findById() {}
// }

// export const userRepository = UserRepositoryImpl.getInstance()

const save = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({ data });
};

const findById = async (id: Prisma.UserWhereUniqueInput) => {
  return await prisma.user.findUnique({ where: id });
};

export const userRepository: UserRepository = {
  save,
  findById,
};
