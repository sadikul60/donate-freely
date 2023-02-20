import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import DonateNowForm from "../../Pages/DonateForm/DonateNowForm";
import MainHome from "../../Pages/Home/MainHome/MainHome";
import MainFundraisers from "../../Pages/MainFundraisers/MainFundraisers/MainFundraisers";
import Medical from "../../Pages/MainFundraisers/Medical/Medical";




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
                element: <MainFundraisers />,
                children: [
                    {
                        path: '/mainFundraisers/medical',
                        element: <Medical />
                    }
                ]
            },
        ]
    }
]);
