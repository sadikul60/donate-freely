import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import DonateNowForm from "../../Pages/DonateForm/DonateNowForm";
import MainHome from "../../Pages/Home/MainHome/MainHome";
import Fundraisers from "../../Pages/MainFundraisers/Fundraisers/Fundraisers";

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
                path: "/donateForm",
                element: <DonateNowForm />
            },
            {
                path: "/mainFundraisers",
                element: <Fundraisers />
            },
        ]
    }
]);
