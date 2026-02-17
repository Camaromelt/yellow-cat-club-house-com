import { useNavigate, useLocation, ScriptOnce, useRouter, useMatch, rootRouteId, Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, redirect, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ClerkProvider as ClerkProvider$1, SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/clerk-react";
import React, { useTransition, useEffect } from "react";
import { i as isClient } from "./index-CSLGDVeV.js";
import { g as getPublicEnvVariables } from "./env-CuBqDywz.js";
import { g as getGlobalStartContext } from "./getGlobalStartContext-aApB2hwj.js";
const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
var ClerkOptionsCtx = React.createContext(void 0);
ClerkOptionsCtx.displayName = "ClerkOptionsCtx";
var ClerkOptionsProvider = (props) => {
  const { children, options } = props;
  return /* @__PURE__ */ jsx(ClerkOptionsCtx.Provider, { value: { value: options }, children });
};
var useAwaitableNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const resolveFunctionsRef = React.useRef([]);
  const resolveAll = () => {
    resolveFunctionsRef.current.forEach((resolve) => resolve());
    resolveFunctionsRef.current.splice(0, resolveFunctionsRef.current.length);
  };
  const [_, startTransition] = useTransition();
  React.useEffect(() => {
    resolveAll();
  }, [location]);
  return (options) => {
    return new Promise((res) => {
      startTransition(() => {
        resolveFunctionsRef.current.push(res);
        res(navigate(options));
      });
    });
  };
};
var pickFromClerkInitState = (clerkInitState) => {
  const {
    __clerk_ssr_state,
    __publishableKey,
    __proxyUrl,
    __domain,
    __isSatellite,
    __signInUrl,
    __signUpUrl,
    __afterSignInUrl,
    __afterSignUpUrl,
    __clerkJSUrl,
    __clerkJSVersion,
    __telemetryDisabled,
    __telemetryDebug,
    __signInForceRedirectUrl,
    __signUpForceRedirectUrl,
    __signInFallbackRedirectUrl,
    __signUpFallbackRedirectUrl
  } = clerkInitState || {};
  return {
    clerkSsrState: __clerk_ssr_state,
    publishableKey: __publishableKey,
    proxyUrl: __proxyUrl,
    domain: __domain,
    isSatellite: !!__isSatellite,
    signInUrl: __signInUrl,
    signUpUrl: __signUpUrl,
    afterSignInUrl: __afterSignInUrl,
    afterSignUpUrl: __afterSignUpUrl,
    clerkJSUrl: __clerkJSUrl,
    clerkJSVersion: __clerkJSVersion,
    telemetry: {
      disabled: __telemetryDisabled,
      debug: __telemetryDebug
    },
    signInForceRedirectUrl: __signInForceRedirectUrl,
    signUpForceRedirectUrl: __signUpForceRedirectUrl,
    signInFallbackRedirectUrl: __signInFallbackRedirectUrl,
    signUpFallbackRedirectUrl: __signUpFallbackRedirectUrl
  };
};
var mergeWithPublicEnvs = (restInitState) => {
  return {
    ...restInitState,
    publishableKey: restInitState.publishableKey || getPublicEnvVariables().publishableKey,
    domain: restInitState.domain || getPublicEnvVariables().domain,
    isSatellite: restInitState.isSatellite || getPublicEnvVariables().isSatellite,
    signInUrl: restInitState.signInUrl || getPublicEnvVariables().signInUrl,
    signUpUrl: restInitState.signUpUrl || getPublicEnvVariables().signUpUrl,
    afterSignInUrl: restInitState.afterSignInUrl || getPublicEnvVariables().afterSignInUrl,
    afterSignUpUrl: restInitState.afterSignUpUrl || getPublicEnvVariables().afterSignUpUrl,
    clerkJSUrl: restInitState.clerkJSUrl || getPublicEnvVariables().clerkJsUrl,
    clerkJSVersion: restInitState.clerkJSVersion || getPublicEnvVariables().clerkJsVersion,
    signInForceRedirectUrl: restInitState.signInForceRedirectUrl,
    clerkJSVariant: restInitState.clerkJSVariant || getPublicEnvVariables().clerkJsVariant
  };
};
var SDK_METADATA = {
  name: "@clerk/tanstack-react-start",
  version: "0.27.17"
};
var awaitableNavigateRef = { current: void 0 };
function ClerkProvider({ children, ...providerProps }) {
  const awaitableNavigate = useAwaitableNavigate();
  const clerkInitialState = getGlobalStartContext()?.clerkInitialState ?? {};
  useEffect(() => {
    awaitableNavigateRef.current = awaitableNavigate;
  }, [awaitableNavigate]);
  const clerkInitState = isClient() ? window.__clerk_init_state : clerkInitialState;
  const { clerkSsrState, ...restInitState } = pickFromClerkInitState(clerkInitState?.__internal_clerk_state);
  const mergedProps = {
    ...mergeWithPublicEnvs(restInitState),
    ...providerProps
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScriptOnce, { children: `window.__clerk_init_state = ${JSON.stringify(clerkInitialState)};` }),
    /* @__PURE__ */ jsx(ClerkOptionsProvider, { options: mergedProps, children: /* @__PURE__ */ jsx(
      ClerkProvider$1,
      {
        initialState: clerkSsrState,
        sdkMetadata: SDK_METADATA,
        routerPush: (to) => awaitableNavigateRef.current?.({
          to,
          replace: false
        }),
        routerReplace: (to) => awaitableNavigateRef.current?.({
          to,
          replace: true
        }),
        ...mergedProps,
        children
      }
    ) })
  ] });
}
ClerkProvider.displayName = "ClerkProvider";
function DefaultCatchBoundary({ error }) {
  const router2 = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });
  console.error(error);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[50vh] gap-4 p-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-red-600 dark:text-red-400", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: error.message }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => router2.invalidate(),
          className: "px-2 py-1 bg-primary-600 dark:bg-primary-700 rounded-sm text-white uppercase font-extrabold",
          children: "Try Again"
        }
      ),
      isRoot ? /* @__PURE__ */ jsx(Link, { to: "/", className: "text-primary-600 hover:underline", children: "Home" }) : /* @__PURE__ */ jsx(
        "button",
        {
          onClick: (e) => {
            e.preventDefault();
            window.history.back();
          },
          className: "text-primary-600 hover:underline",
          children: "Go Back"
        }
      )
    ] })
  ] });
}
function NotFound({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[50vh] gap-4 p-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: children || "The page you are looking for does not exist." }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.history.back(),
          className: "bg-primary-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
          children: "Go back"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "bg-accent-500 text-primary-900 px-2 py-1 rounded-sm uppercase font-black text-sm hover:bg-accent-600",
          children: "Start Over"
        }
      )
    ] })
  ] });
}
const appCss = "/assets/app-DzRyF-Fr.css";
const fetchClerkAuth = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f593eb9d48dc18acbc71a844108c066e237d2f57b78b13b5f0f38e7dff934aab"));
const Route$8 = createRootRoute({
  beforeLoad: async () => {
    const {
      userId
    } = await fetchClerkAuth();
    return {
      userId
    };
  },
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      title: "Yellow Cat ClubHouse - Kids Play & Pretend"
    }],
    links: [{
      rel: "stylesheet",
      href: appCss
    }, {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
    }]
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: NotFound,
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxs(ClerkProvider, { children: [
    /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" })
  ] });
}
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "scroll-smooth", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "min-h-screen font-sans antialiased", children: [
      /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-50 bg-primary-50/95 dark:bg-primary-950/95 border-b border-olive-200 dark:border-slate-600 backdrop-blur", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex h-16 items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 text-xl font-bold text-primary-600 dark:text-primary-200 hover:text-primary-500", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🐱" }),
          "Yellow Cat ClubHouse"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "text-primary-600 dark:text-primary-200 hover:underline", children: "Home" }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-primary-600 dark:text-primary-200 hover:underline", children: "About" }),
          /* @__PURE__ */ jsx(Link, { to: "/pricing", className: "text-primary-600 dark:text-primary-200 hover:underline", children: "Hours & Pricing" }),
          /* @__PURE__ */ jsxs(SignedIn, { children: [
            /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "text-primary-600 dark:text-primary-200 hover:underline", children: "Dashboard" }),
            /* @__PURE__ */ jsx(UserButton, { afterSignOutUrl: "/" })
          ] }),
          /* @__PURE__ */ jsxs(SignedOut, { children: [
            /* @__PURE__ */ jsx(SignInButton, { mode: "modal", children: /* @__PURE__ */ jsx("button", { className: "rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600", children: "Sign In" }) }),
            /* @__PURE__ */ jsx(Link, { to: "/sign-up", className: "rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700", children: "Sign Up" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("main", { children }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$7 = () => import("./waiver-Bg4MVLiA.js");
const checkWaiverAuth = createServerFn({
  method: "GET"
}).handler(createSsrRpc("38109ac012db18103c1dbbbfb6f86c103c086f907c0eb76b293860b68f102b7e"));
const Route$7 = createFileRoute("/waiver")({
  beforeLoad: async () => {
    const {
      userId
    } = await checkWaiverAuth();
    if (!userId) {
      throw redirect({
        to: "/sign-in"
      });
    }
    return {};
  },
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./sign-up-y9J7zQhR.js");
const Route$6 = createFileRoute("/sign-up")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./sign-in-CJdeqZZ6.js");
const Route$5 = createFileRoute("/sign-in")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./pricing-Ckg_wqdf.js");
const Route$4 = createFileRoute("/pricing")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-CEbENNBs.js");
const Route$3 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./_authed-CZZmyBOS.js");
const fetchAuth = createServerFn({
  method: "GET"
}).handler(createSsrRpc("5e357e1838b28eff68362afbaec6b3d9f228fcbfebe06516eeb43c287853d755"));
const Route$2 = createFileRoute("/_authed")({
  beforeLoad: async () => {
    const {
      userId
    } = await fetchAuth();
    if (!userId) {
      throw redirect({
        to: "/sign-in"
      });
    }
    return {
      userId
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-B20u0TAG.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./dashboard-Cx7ROpMN.js");
const fetchUserWaiverStatus = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f120ea4843a7b45f774fce2fae335728e4d76ca85ef34319fd98bbe3654afdb8"));
const Route = createFileRoute("/_authed/dashboard")({
  loader: async () => {
    return await fetchUserWaiverStatus();
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WaiverRoute = Route$7.update({
  id: "/waiver",
  path: "/waiver",
  getParentRoute: () => Route$8
});
const SignUpRoute = Route$6.update({
  id: "/sign-up",
  path: "/sign-up",
  getParentRoute: () => Route$8
});
const SignInRoute = Route$5.update({
  id: "/sign-in",
  path: "/sign-in",
  getParentRoute: () => Route$8
});
const PricingRoute = Route$4.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const AuthedRoute = Route$2.update({
  id: "/_authed",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const AuthedDashboardRoute = Route.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AuthedRoute
});
const AuthedRouteChildren = {
  AuthedDashboardRoute
};
const AuthedRouteWithChildren = AuthedRoute._addFileChildren(AuthedRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
  AboutRoute,
  PricingRoute,
  SignInRoute,
  SignUpRoute,
  WaiverRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: NotFound,
    scrollRestoration: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  createSsrRpc as c,
  router as r
};
