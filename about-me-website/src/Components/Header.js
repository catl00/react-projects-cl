import React from "react";
import Nav from "./Nav";

function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                AppName
            </span>
            <Nav />
        </header>
    )
}

export default Header;