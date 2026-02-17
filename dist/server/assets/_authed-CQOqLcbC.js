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
const fetchAuth_createServerFn_handler = createServerRpc({
  id: "5e357e1838b28eff68362afbaec6b3d9f228fcbfebe06516eeb43c287853d755",
  name: "fetchAuth",
  filename: "src/routes/_authed.tsx"
}, (opts) => fetchAuth.__executeServer(opts));
const fetchAuth = createServerFn({
  method: "GET"
}).handler(fetchAuth_createServerFn_handler, async () => {
  const {
    userId
  } = await auth();
  return {
    userId
  };
});
export {
  fetchAuth_createServerFn_handler
};
