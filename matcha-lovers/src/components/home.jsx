import '../styles/home.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

function Home() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);
    
    const navigate = useNavigate();

    return (
        <div className='home'>
            <div className='row1'>
                <h1>view and order here!</h1>
                <button className="home-button" onClick={() => navigate('/menu')}>
                    see menu
                </button>
            </div>
            
            <div className='row2'>
                <div>
                    <h1>to get started, sign up or log in to get rewards</h1>
                    <button className="home-button" onClick={() => navigate('/login')}>
                        log in | sign up
                    </button>
                </div>
                {/* <div>
                    <h1>to skip rewards, order now</h1>
                    <button className="home-button" onClick={() => navigate('/')}>
                        order now
                    </button>
                </div>  */}
            </div>
        </div>
    );
}

export default Home;