import React from "react";
import { Link } from 'react-router-dom';

function NavMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">Smiski Store</div>
            <ul>
                <li> 
                    <Link 
                        to="/" 
                        className='text-blue-500 py-3 border-t border-b'
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                {/* <li> 
                    <Link 
                        to="/product/:id" 
                        className='text-blue-500 py-3 border-b' 
                        onClick={props.closeMenu}
                    >
                        Product
                    </Link> 
                </li> */}
                </ul>       
        </div>

    );
}

export default NavMenu;