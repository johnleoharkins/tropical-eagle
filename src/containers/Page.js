import React from "react";
import NavBar from "../components/NavBar";
import classes from './Page.module.css'
import {Container} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const Page = ({children}) => {

    return (
        <React.Fragment>
            <NavBar />
            {children}
        </React.Fragment>
    )
}

export default Page;