import { jsx } from "react/jsx-runtime";
import { S as SignUp } from "./uiComponents-DxgpjVu9.js";
import "@clerk/clerk-react";
import "@clerk/clerk-react/internal";
import "@tanstack/react-router";
function SignUpPage() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12", children: /* @__PURE__ */ jsx(SignUp, { fallbackRedirectUrl: "/waiver", signInUrl: "/sign-in", appearance: {
    variables: {
      colorPrimary: "#5385bd",
      colorBackground: "#eff4fa",
      borderRadius: "0.75rem"
    }
  } }) });
}
export {
  SignUpPage as component
};
