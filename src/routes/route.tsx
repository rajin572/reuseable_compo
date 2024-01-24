import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

//w-full py-3 px-5 md:px-10  lg:px-15 flex justify-between items-center bg-violet-500 text-white z-50 border-b-2 border-lime-400
//w-full py-3 px-5 md:px-10 lg:px-20 flex justify-between items-center bg-violet-500 text-white z-50 relative

export default router;
