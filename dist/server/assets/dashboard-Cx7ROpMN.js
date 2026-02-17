import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { R as Route } from "./router-CDM_k0J_.js";
import "../server.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router-devtools";
import "@clerk/clerk-react";
import "react";
import "./index-CSLGDVeV.js";
import "@clerk/shared/error";
import "./env-CuBqDywz.js";
import "@clerk/shared/getEnvVariable";
import "@clerk/shared/underscore";
import "./getGlobalStartContext-aApB2hwj.js";
function Dashboard() {
  const {
    waiverAccepted,
    waiverVersion,
    waiverAcceptedAt
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-primary-900 dark:text-primary-100", children: "Welcome to Yellow Cat ClubHouse!" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-primary-700 dark:text-primary-200", children: "Your account is ready. You're all set to play!" }),
    waiverAccepted ? /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-xl border border-olive-200 bg-olive-50 p-6 dark:border-olive-800 dark:bg-olive-950/30", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-olive-600 dark:text-olive-400", children: "Waiver Status" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-olive-600 dark:text-olive-400", children: "You have accepted our play place waiver." }),
      waiverAcceptedAt && /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-slate-600 dark:text-slate-400", children: [
        "Accepted on ",
        new Date(waiverAcceptedAt).toLocaleDateString(),
        " ( version ",
        waiverVersion,
        ")"
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-xl border border-olive-200 bg-olive-50 p-6 dark:border-slate-600 dark:bg-primary-950/30", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-primary-700 dark:text-primary-200", children: "Complete Your Registration" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-600 dark:text-slate-400", children: "You need to accept our play place waiver before visiting. Please complete the waiver to continue." }),
      /* @__PURE__ */ jsx(Link, { to: "/waiver", className: "mt-4 inline-block rounded-md bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600", children: "Accept Waiver" })
    ] })
  ] });
}
export {
  Dashboard as component
};
