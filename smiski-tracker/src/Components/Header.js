import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold p-2 text-2xl">
                <Link to="/">
                    Smiski Tracker
                </Link>
            </span>
            <Nav />
        </header>
    )
}

export default Header;