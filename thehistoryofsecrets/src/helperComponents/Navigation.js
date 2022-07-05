import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import '../styles/Navigation.css'

const Navigation = () => {

    const [showMono, setShowMono] = useState(false);

    const toggleMono = () => {
        setShowMono(!showMono);
    }

    return(
        <>
            <nav className="Navigation">
                <Link className="HomeButton" to="/">Home</Link>
                <div className="DropdownRoot" onClick={toggleMono}>Mono-Alphabetical</div>
                {showMono ?
                    (
                    <ul className="DropdownList">
                    <li><Link to="atbash"> Atbash </Link></li>
                    <li><Link to="shift"> Shift </Link></li>
                    <li><Link to="affine"> Affine </Link></li>
                    </ul>
                    ) :
                    (null)
                }
            </nav>
            <Outlet/>  
        </>
    );
}

export default Navigation;