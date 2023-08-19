import React from "react";
import {Link} from "react-router-dom";



function Navigation() {
    return (
        <nav>
            <div className="navBar">
                <Link to="/index.html" className="links">Home</Link>
                <Link to="settings" className="links">Settings</Link>
            </div>
        </nav>
    );
}

export default Navigation;