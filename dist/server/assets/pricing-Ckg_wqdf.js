import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function Pricing() {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-primary-900 dark:text-primary-100", children: "Hours & Pricing" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-primary-700 dark:text-primary-200", children: "Hours of Operation" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-slate-600 dark:text-slate-400", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Monday – Friday:" }),
            " 9:00 AM – 6:00 PM"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Saturday:" }),
            " 10:00 AM – 5:00 PM"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Sunday:" }),
            " 11:00 AM – 4:00 PM"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-500 dark:text-slate-500", children: "Hours may vary on holidays. Please call ahead to confirm." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-primary-700 dark:text-primary-200", children: "Admission" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-xl border border-olive-200 bg-olive-50 p-6 dark:border-slate-600 dark:bg-primary-950/50", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-primary-700 dark:text-primary-200", children: [
            /* @__PURE__ */ jsx("strong", { children: "Single Visit:" }),
            " $15 per child"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-primary-700 dark:text-primary-200", children: [
            /* @__PURE__ */ jsx("strong", { children: "10-Pack:" }),
            " $120 (save $30)"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-primary-700 dark:text-primary-200", children: [
            /* @__PURE__ */ jsx("strong", { children: "Monthly Membership:" }),
            " $45/month (unlimited visits)"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-slate-500 dark:text-slate-500", children: "Adults and children under 1 are free. Socks required for all visitors in play areas." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pt-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/sign-up", className: "rounded-md bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600", children: "Create Account" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "rounded-md border border-olive-300 px-6 py-2 font-medium text-primary-700 hover:bg-primary-50 dark:border-slate-600 dark:text-primary-200 dark:hover:bg-primary-900/50", children: "Back to Home" })
      ] })
    ] })
  ] });
}
export {
  Pricing as component
};
