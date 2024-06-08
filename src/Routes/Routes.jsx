import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import HouseDetails from "../pages/HouseDetails/HouseDetails";
import NotFound404 from "../pages/Shared/NotFound404/NotFound404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/houseDetails/:id",
        element: <HouseDetails />,
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
]);
