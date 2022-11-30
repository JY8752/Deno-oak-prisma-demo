import { AssertionError } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import { BodyJson } from "https://deno.land/x/oak@v11.1.0/body.ts";

export const getBodyValue = async <T>(body: BodyJson) => {
  const value: T = await body.value;
  return value;
};

export function assertError(e: unknown): asserts e is Error {
  if (e instanceof Error) {
    return;
  }
  throw Error(`e is not Error instance. e: ${e}`);
}
