import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import DonateNowForm from "../../Pages/DonateForm/DonateNowForm";
import MainHome from "../../Pages/Home/MainHome/MainHome";
import LogIn from "../../Pages/LogIn/LogIn";
import Fundraisers from "../../Pages/MainFundraisers/Fundraisers/Fundraisers";
import MainFundraisers from "../../Pages/MainFundraisers/MainFundraisers/MainFundraisers";
import Medical from "../../Pages/MainFundraisers/Medical/Medical";
import Register from "../../Pages/Register/Register";
import UserProfile from "../../Pages/UserProfile/UserProfile";




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
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/donateForm",
                element: <DonateNowForm />
            },
            // {
            //     path: "/userProfile",
            //     element: <UserProfile />
            // },
            {
                path: "/fundraisers",
                element: <MainFundraisers />,
                children: [
                    {
                        path: '/fundraisers',
                        element: <Fundraisers />
                    },
                    {
                        path: '/fundraisers/medical',
                        element: <Medical />
                    },
                ]
            },
        ]
    }
]);
