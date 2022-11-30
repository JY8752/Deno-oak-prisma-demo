import { PrismaClient } from "../../../generated/infrastructure/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.166.0/dotenv/mod.ts";

const envVars = await config();
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});
