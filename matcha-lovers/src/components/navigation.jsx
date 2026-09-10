import "../styles/navigation.css";
import { useState } from "react";

function Navigation() {
    const logo = {
        src: "../public/matcha logo.png",
        alt: "Matcha Lovers Logo",
        height: "80px",
        width: "1040px",
    };

    const [selectedNavItem, setSelectedNavItem] = useState(items[0]);

    function handleNavItemClick(item) {
        setSelectedNavItem(item);
    }

    // Displaying Order Now Modal
    const [showOrderModal, setShowOrderModal] = useState(false);

    const toggleOrderModal = () => {
        setShowOrderModal(!showOrderModal);
    };

    const [showLoginModal, setLoginModal] = useState(false);

    const loginModalClickHandler = () => {
        setLoginModal(!showLoginModal);
    };

    return (
        <>
            <h1>Matcha Lovers </h1>
            <nav>
                <Image src={logo.src} alt={logo.alt} height={logo.height} width={logo.width} />
                <button
                    className="login-button"
                    type="button"
                    onClick={loginModalClickHandler}
                >
                    Log In | Sign Up
                </button>
                {/* <button type="button" onClick={toggleOrderModal}>
                    Order Now
                </button> */}
            </nav>
            {/* <Outlet /> */}
            {/* <OrderNow
                show={showOrderModal}
                close={toggleOrderModal}
                // imageURL="/images/background_noodle.png"
            /> */}
            <Login/>
        </>
    )

}

export default Navigation;