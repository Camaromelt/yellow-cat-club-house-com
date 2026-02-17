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
const fetchUserWaiverStatus_createServerFn_handler = createServerRpc({
  id: "f120ea4843a7b45f774fce2fae335728e4d76ca85ef34319fd98bbe3654afdb8",
  name: "fetchUserWaiverStatus",
  filename: "src/routes/_authed/dashboard.tsx"
}, (opts) => fetchUserWaiverStatus.__executeServer(opts));
const fetchUserWaiverStatus = createServerFn({
  method: "GET"
}).handler(fetchUserWaiverStatus_createServerFn_handler, async () => {
  const {
    userId
  } = await auth();
  if (!userId) return {
    waiverAccepted: false
  };
  const {
    clerkClient
  } = await import("@clerk/backend");
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const metadata = user.publicMetadata;
  return {
    waiverAccepted: !!metadata?.waiverAccepted,
    waiverVersion: metadata?.waiverVersion,
    waiverAcceptedAt: metadata?.waiverAcceptedAt
  };
});
export {
  fetchUserWaiverStatus_createServerFn_handler
};
