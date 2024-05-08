import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const sverdle = createCookie("sverdle", {
  maxAge: 604_800, // one week
});
