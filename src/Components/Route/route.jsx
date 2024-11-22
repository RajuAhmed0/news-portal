import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import About from "../Pages/About/About";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AllNews from "../Categories/AllNews/AllNews";
import BreakingNews from "../Categories/BreakingNews/BreakingNews";
import RegularNews from "../Categories/RegularNews/RegularNews";
import InternationalNews from "../Categories/InternationalNews/InternationalNews";
import Sports from "../Categories/Sports/Sports";
import Entertainment from "../Categories/Entertainment/Entertainment";
import Culture from "../Categories/Culture/Culture";
import Arts from "../Categories/Arts/Arts";
import Career from "../Pages/Career/Career";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomeLayout></HomeLayout>,
                children:[
                    {
                        path:"/",
                        element:<AllNews></AllNews>
                    },
                    {
                        path:"/breakingNews",
                        element:<BreakingNews></BreakingNews>
                    },
                    {
                        path:"/regularNews",
                        element:<RegularNews></RegularNews>
                    },
                    {
                        path:"/internationalNews",
                        element:<InternationalNews></InternationalNews>
                    },
                    {
                        path:"/sports",
                        element:<Sports></Sports>
                    },
                    {
                        path:"/entertainment",
                        element:<Entertainment></Entertainment>
                    },
                    {
                        path:"/culture",
                        element:<Culture></Culture>
                    },
                    {
                        path:"/arts",
                        element:<Arts></Arts>
                    },
                ]
                
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            },
          
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
        ]
    }
])