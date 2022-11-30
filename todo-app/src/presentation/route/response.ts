export type SuccessResponse<T> = {
  success: Readonly<boolean>;
  payload: Readonly<T>;
};

export type ErrorResponse = {
  success: Readonly<boolean>;
  errorMessage: Readonly<string>;
};

const success = <T>(payload: T): SuccessResponse<T> => {
  return {
    success: true,
    payload,
  };
};

const error = (errorMessage: string): ErrorResponse => {
  return {
    success: false,
    errorMessage,
  };
};

export const response = {
  success,
  error,
};
