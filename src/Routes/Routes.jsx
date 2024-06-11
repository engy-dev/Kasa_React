import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import HouseDetails from "../pages/HouseDetails/HouseDetails";
import NotFound404 from "../pages/Shared/NotFound404/NotFound404";

export const router = createBrowserRouter([
{
        path: '/',
        element: (
            <Layout />
        ),
        errorElement: <NotFound404 />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'details/:id',
                element: <HouseDetails />
            }, 
            {
                path: 'error',
                element: <NotFound404 />
            }
        ]
    }