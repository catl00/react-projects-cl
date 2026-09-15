import "../styles/navigation.css";
import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";

// 1. Import your modal component (adjust path if needed)
import LoginModal from "../components/login-components/login-signup-m"; 
import Order from "../components/order-components/order";

function Navigation() {
    const logo = {
        src: "images/matcha logo.png",
        alt: "Matcha Lovers Logo",
    };

    // Modal Display State
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <nav>
                {/* Brand and Logo */}
                <div className="nav-brand" onClick={() => navigate('/')}>
                    <img src={logo.src} alt={logo.alt}/>
                    <h1 className="brand-title">matcha lovers </h1>
                </div>

                {/* Modal Buttons */} 
                <div className="button-container">
                    {/* 2. Changed onClick to update internal state directly */}
                    <button className="home-button" onClick={() => setShowLoginModal(true)}>
                        log in | sign up
                    </button>
                    
                    <button className="home-button" onClick={() => setShowOrderModal(true)}>
                        order now
                    </button>
                </div>
            </nav>

            {/* Renders the current page route */}
            <Outlet />

            {/* Conditional Modal Renderings */}
            {/* 3. Fixed onClose to set showLoginModal to false */}
            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
            )}

            {showOrderModal && (
                <Order onClose={() => setShowOrderModal(false)} />
            )}
        </>
    );
}

export default Navigation;