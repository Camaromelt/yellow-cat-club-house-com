import { c as createServerRpc, a as auth } from "./auth-BFpcC7JG.js";
import { c as createServerFn } from "../server.js";
import "@clerk/backend/internal";
import "./index-CSLGDVeV.js";
import "@clerk/shared/error";
import "./getGlobalStartContext-aApB2hwj.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const fetchClerkAuth_createServerFn_handler = createServerRpc({
  id: "f593eb9d48dc18acbc71a844108c066e237d2f57b78b13b5f0f38e7dff934aab",
  name: "fetchClerkAuth",
  filename: "src/routes/__root.tsx"
}, (opts) => fetchClerkAuth.__executeServer(opts));
const fetchClerkAuth = createServerFn({
  method: "GET"
}).handler(fetchClerkAuth_createServerFn_handler, async () => {
  const {
    userId
  } = await auth();
  return {
    userId
  };
});
export {
  fetchClerkAuth_createServerFn_handler
};
