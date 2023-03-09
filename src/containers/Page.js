import React from "react";
import NavBar from "../components/NavBar";


const Page = ({children}) => {

    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

export default Page;