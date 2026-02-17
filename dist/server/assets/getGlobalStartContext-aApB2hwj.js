import { a as getStartContext } from "../server.js";
const getGlobalStartContext = () => {
  const context = getStartContext().contextAfterGlobalMiddlewares;
  if (!context) {
    throw new Error(`Global context not set yet, you are calling getGlobalStartContext() before the global middlewares are applied.`);
  }
  return context;
};
export {
  getGlobalStartContext as g
};
