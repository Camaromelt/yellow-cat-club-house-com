import { jsxs, jsx } from "react/jsx-runtime";
import { c as createSsrRpc } from "./router-CDM_k0J_.js";
import { useRouter, Link } from "@tanstack/react-router";
import { useState } from "react";
import { a as WAIVER_TEXT } from "./waiver-B-KWsyed.js";
import { c as createServerFn } from "../server.js";
import "@tanstack/react-router-devtools";
import "@clerk/clerk-react";
import "./index-CSLGDVeV.js";
import "@clerk/shared/error";
import "./env-CuBqDywz.js";
import "@clerk/shared/getEnvVariable";
import "@clerk/shared/underscore";
import "./getGlobalStartContext-aApB2hwj.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
const acceptWaiverFn = createServerFn({
  method: "POST"
}).handler(createSsrRpc("82840c9b189de50abfe2ab4931d7b5ef1a519429086fdcc92ffed4c33648c241"));
function WaiverPage() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accepted) return;
    setIsSubmitting(true);
    try {
      await acceptWaiverFn();
      await router.navigate({
        to: "/dashboard"
      });
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-primary-900 dark:text-primary-100", children: "Legal Waiver & Release" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-600 dark:text-slate-400", children: "Please read and accept the following before using Yellow Cat ClubHouse facilities." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 max-h-[50vh] overflow-y-auto rounded-xl border border-olive-200 bg-olive-50/50 p-6 dark:border-slate-600 dark:bg-primary-950/30", children: /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap font-sans text-sm text-primary-900 dark:text-primary-200", children: WAIVER_TEXT }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mt-8", children: [
      /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: accepted, onChange: (e) => setAccepted(e.target.checked), className: "mt-1 h-5 w-5 rounded border-olive-300 text-primary-600 focus:ring-primary-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-primary-700 dark:text-primary-200", children: "I have read, understood, and agree to the terms of this waiver and release of liability. I am the parent or legal guardian of the child(ren) who will participate, and I have the authority to sign on their behalf." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-4", children: [
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: !accepted || isSubmitting, className: "rounded-md bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50", children: isSubmitting ? "Processing..." : "I Agree - Continue" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "rounded-md border border-olive-300 px-6 py-2 font-medium text-primary-700 hover:bg-primary-50 dark:border-slate-600 dark:text-primary-200 dark:hover:bg-primary-900/50", children: "Cancel" })
      ] })
    ] })
  ] });
}
export {
  WaiverPage as component
};
