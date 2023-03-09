import Landing from "./containers/Landing";
import Root from "./Root";
import {redirect} from "react-router-dom";
import Dogs from "./containers/Dogs";
import Contact from "./containers/Contact";
import {DOG_DATA} from "./data/dogs/DOG_DATA";


export const ROUTES = [
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "dogs",
        element: <Dogs />,
        loader: () => {
            return DOG_DATA
        }
    },
    {
        path: "contact",
        element: <Contact />
    },

]