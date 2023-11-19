import { RouterProvider } from "react-router-dom";
import "./App.css";
import rootRouter from "./routers";

function App() {
  return (
    <>
      <RouterProvider router={rootRouter} />
    </>
  );
}

export default App;
