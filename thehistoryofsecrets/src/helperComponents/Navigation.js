import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="atbash"> Atbash </Link>
                <Link to="shift"> Shift </Link>
                <Link to="affine"> Affine </Link>
            </nav>
            <Outlet/>  
        </>
    );
}

export default Navigation;