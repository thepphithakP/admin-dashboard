import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./public/pubblic.router";
import privateRouter from "./private/private.router";

const baseURL = `${import.meta.env.VITE_APP_BASE_URL}`;

const rootRouter = createBrowserRouter([...publicRouter, ...privateRouter], {
  basename: baseURL,
});
export default rootRouter;
