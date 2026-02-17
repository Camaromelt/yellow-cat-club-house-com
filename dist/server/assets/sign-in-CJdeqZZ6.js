import { jsx } from "react/jsx-runtime";
import { a as SignIn } from "./uiComponents-DxgpjVu9.js";
import "@clerk/clerk-react";
import "@clerk/clerk-react/internal";
import "@tanstack/react-router";
function SignInPage() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[ calc(100vh-4rem)] items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsx(SignIn, { fallbackRedirectUrl: "/dashboard", signUpUrl: "/sign-up", appearance: {
    variables: {
      colorPrimary: "#5385bd",
      colorBackground: "#eff4fa",
      borderRadius: "0.75rem"
    }
  } }) });
}
export {
  SignInPage as component
};
