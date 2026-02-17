import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const activities = [
  {
    id: "1",
    name: "Padded Play Arena",
    description: "A safe, fully padded play space where kids can run, jump, and tumble with confidence. Soft foam mats and cushioned walls make every adventure worry-free.",
    ageRange: "Ages 1-8"
  },
  {
    id: "2",
    name: "Pretend Play Village",
    description: "A miniature village where imagination comes alive. Kids can pretend to cook, shop, and role-play in our kid-sized play structures.",
    ageRange: "Ages 2-10"
  },
  {
    id: "3",
    name: "Climbing Cubes",
    description: "Colorful, soft climbing structures designed for little explorers. Build confidence and motor skills in a fully padded environment.",
    ageRange: "Ages 2-7"
  },
  {
    id: "4",
    name: "Ball Pit Paradise",
    description: "Dive into our giant ball pit! A favorite for sensory play and pure fun. Clean, soft balls in a padded enclosure.",
    ageRange: "Ages 1-8"
  },
  {
    id: "5",
    name: "Art & Create Corner",
    description: "A creative space for crafts and imaginative play. Safe, age-appropriate materials for budding artists.",
    ageRange: "Ages 2-12"
  },
  {
    id: "6",
    name: "Group Play Zone",
    description: "Designed for social play! Kids make new friends while playing together in our supervised group activities.",
    ageRange: "Ages 3-10"
  }
];
function Home() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden bg-gradient-to-br from-primary-100 via-olive-50 to-accent-400/20 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 px-4 py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl font-bold tracking-tight text-primary-900 dark:text-primary-100 sm:text-5xl md:text-6xl", children: "Yellow Cat ClubHouse" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-primary-700 dark:text-primary-200 sm:text-xl", children: "Where kids pretend, play, and make friends in a safe padded space. Join the fun!" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/sign-up", className: "rounded-full bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2", children: "Create Account" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "rounded-full bg-white px-8 py-3 text-base font-semibold text-primary-700 shadow-md ring-1 ring-olive-200 hover:bg-primary-50 dark:bg-primary-900/50 dark:ring-slate-600 dark:hover:bg-primary-900/70", children: "Learn More" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-4 py-16 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-3xl font-bold text-primary-900 dark:text-primary-100", children: "Our Activities" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-center text-primary-700 dark:text-primary-200", children: "Safe, padded play areas designed for imagination and active fun." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: activities.map((activity) => /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-2xl border border-olive-200 bg-white shadow-lg dark:border-slate-600 dark:bg-primary-950/50", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-32 items-center justify-center bg-gradient-to-br from-primary-200 to-olive-100 dark:from-primary-700 dark:to-primary-800", children: /* @__PURE__ */ jsx("span", { className: "text-5xl", children: "🎪" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-primary-900 dark:text-primary-100", children: activity.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-600 dark:text-slate-400", children: activity.description }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs font-medium text-slate-500 dark:text-slate-500", children: activity.ageRange })
        ] })
      ] }, activity.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary-600 px-4 py-16 dark:bg-primary-800", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "Ready to Play? Sign Up Today" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-primary-100", children: "Create an account and accept our play place waiver to get started." }),
      /* @__PURE__ */ jsx(Link, { to: "/sign-up", className: "mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary-600 hover:bg-primary-50", children: "Register Now" })
    ] }) })
  ] });
}
export {
  Home as component
};
