import { Outlet, NavLink, useLocation } from 'react-router-dom';
import '../styles/navigation.css';
import Logo from '../assets/C.png';

function Navigation() {
    const location = useLocation();

    // Map each path to its relative width and horizontal position (in px) on the bar
    const getActiveStyle = () => {
        switch (location.pathname) {
            case '/':
                return { width: '535px' };
            case '/experience':
                return { width: '765px'};
            case '/projects':
                return { width: '1005px'};
            case '/contact':
                return { width: '1225px'};
            default:
                return { width: '535px'};
        }
    };

    const activeBarStyle = getActiveStyle();

    return (
        <>
            <nav>
                <div className='section-1'>
                    {/* Brand Logo */}
                    <NavLink to="/" className="brand">
                        <img src={Logo} alt="Catherine Logo" />
                        <h1>catherine le</h1>
                    </NavLink>

                    {/* Navigation Links */}
                    <div className='nav-links'>
                        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                            home
                        </NavLink>
                        <NavLink to="/experience" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                            experience
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                            projects
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                            contact
                        </NavLink>
                    </div>
                </div>

                {/* Navigation Progress Bar */}
                <div className='section-2'>
                    <div className="nav-dots">
                        <span className="dot" style={{ left: 0, top: 0 }}></span>
                        <span className="dot" style={{ left: 21, top: 0 }}></span>
                        <span className="dot" style={{ left: 42, top: 0 }}></span>
                    </div>

                    {/* Base Track */}
                    <div className='nav-bar nav-bar-track'></div> 

                    {/* Active Indicator Bar */}
                    <div 
                        className='nav-bar nav-bar-active' 
                        style={{
                            width: activeBarStyle.width,
                            left: activeBarStyle.left
                        }}
                    ></div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;