import React, {useState} from "react";
import { VscThreeBars } from "react-icons/vsc";
import { useTransition, animated } from "@react-spring/web";
import NavMenu from "./NavMenu.js";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    // react-spring v9+ uses the (items, config) signature; passing a `null` key (older API)
    // can cause runtime errors. Use the new API shape below.
    const maskTransition = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const menuTransition = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });

    return (
        <nav>
            <span className="text-xl">
                <VscThreeBars 
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {
                // react-spring v9+ returns a transition function; call it with a render callback
                maskTransition((styles, item) =>
                    item && (
                        <animated.div
                            style={styles}
                            className={"bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"}
                            onClick={() => setShowMenu(false)}
                        />
                    )
                )
            }

            {
                menuTransition((styles, item) =>
                    item && (
                        <animated.div
                            style={styles}
                            className={"fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"}
                        >        
                            <NavMenu closeMenu={() => setShowMenu(false)} />    
                        </animated.div>
                    )
                )
            }
        </nav>
    )
}

export default Nav;