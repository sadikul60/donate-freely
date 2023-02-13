import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import MainHome from "../../Pages/Home/MainHome/MainHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <MainHome />
            },
            {
                path: "/home",
                element: <MainHome />
            }
        ]
    }
]);
