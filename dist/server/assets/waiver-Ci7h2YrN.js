import { c as createServerRpc, a as auth } from "./auth-BFpcC7JG.js";
import { clerkClient } from "@clerk/backend";
import { W as WAIVER_VERSION } from "./waiver-B-KWsyed.js";
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
const acceptWaiverFn_createServerFn_handler = createServerRpc({
  id: "82840c9b189de50abfe2ab4931d7b5ef1a519429086fdcc92ffed4c33648c241",
  name: "acceptWaiverFn",
  filename: "src/routes/waiver.tsx"
}, (opts) => acceptWaiverFn.__executeServer(opts));
const acceptWaiverFn = createServerFn({
  method: "POST"
}).handler(acceptWaiverFn_createServerFn_handler, async () => {
  const {
    userId
  } = await auth();
  if (!userId) {
    throw new Error("You must be signed in to accept the waiver");
  }
  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      waiverAccepted: true,
      waiverVersion: WAIVER_VERSION,
      waiverAcceptedAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
  return {
    success: true
  };
});
const checkWaiverAuth_createServerFn_handler = createServerRpc({
  id: "38109ac012db18103c1dbbbfb6f86c103c086f907c0eb76b293860b68f102b7e",
  name: "checkWaiverAuth",
  filename: "src/routes/waiver.tsx"
}, (opts) => checkWaiverAuth.__executeServer(opts));
const checkWaiverAuth = createServerFn({
  method: "GET"
}).handler(checkWaiverAuth_createServerFn_handler, async () => {
  const {
    userId
  } = await auth();
  return {
    userId
  };
});
export {
  acceptWaiverFn_createServerFn_handler,
  checkWaiverAuth_createServerFn_handler
};
