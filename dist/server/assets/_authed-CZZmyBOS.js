import { jsx } from "react/jsx-runtime";
import { Outlet } from "@tanstack/react-router";
function AuthedLayout() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
export {
  AuthedLayout as component
};
