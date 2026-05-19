import { createBrowserRouter } from "react-router-dom";
import Register from "./features/Auth/pages/Register";
import Login from "./features/Auth/pages/Login";

export const router=createBrowserRouter([
    {
        path:'/register',
        element:<Register/>
    },
    {
           path:'/login',
        element:<Login/>
    }
])