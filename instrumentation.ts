import { type Instrumentation } from "next";

export const onRequestError: Instrumentation.onRequestError = async (
  err,
  request,
  context
) => {
  console.log({
    method: "POST",
    body: JSON.stringify({
      message: (err as Error).message,
      request,
      context,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export function register() {
  console.log("registered!");
}
