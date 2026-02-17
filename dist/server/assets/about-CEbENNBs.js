import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-primary-900 dark:text-primary-100", children: "About Yellow Cat ClubHouse" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-6 text-primary-700 dark:text-primary-200", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed", children: "Yellow Cat ClubHouse is a kids gym and play place where children can pretend, explore, and make new friends in a safe, padded environment." }),
      /* @__PURE__ */ jsx("p", { children: "Our facilities are designed with safety first—soft foam mats, cushioned walls, and age-appropriate play structures let kids run, climb, and tumble with confidence. From our Pretend Play Village to our Ball Pit Paradise, every corner is built for imagination and active fun." }),
      /* @__PURE__ */ jsx("p", { children: "We believe in the power of play. When kids feel safe, they take risks—climbing a bit higher, trying a new game, or making a new friend. That's what Yellow Cat ClubHouse is all about." }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-olive-200 bg-olive-50 p-6 dark:border-slate-600 dark:bg-primary-950/50", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-primary-900 dark:text-primary-100", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: "To provide a welcoming, safe space where every child can play, learn, and grow through imaginative and physical play." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pt-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/sign-up", className: "rounded-md bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600", children: "Join Us" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "rounded-md border border-olive-300 px-6 py-2 font-medium text-primary-700 hover:bg-primary-50 dark:border-slate-600 dark:text-primary-200 dark:hover:bg-primary-900/50", children: "Back to Home" })
      ] })
    ] })
  ] });
}
export {
  About as component
};
