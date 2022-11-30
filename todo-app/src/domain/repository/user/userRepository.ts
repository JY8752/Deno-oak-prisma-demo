import {
  Prisma,
  User,
} from "../../../../generated/infrastructure/client/deno/index.d.ts";

export type UserRepository = {
  save: (
    data: Prisma.UserCreateInput,
  ) => Promise<User>;
  findById: (id: Prisma.UserWhereUniqueInput) => Promise<User | null>;
};
