import '../styles/home.css'
import { useState } from 'react';
import LoginSignup from './login-signup';
import Order from './order';

function Home() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);

    return (
        <div className='home'>
            <div className='row1'>
                <h1>welcome to matcha lovers!</h1>
                <button onClick={() => console.log('menu')}>see menu</button>
            </div>
            <div className='row2'>
                <div>
                    <h1>to get started, sign up or log in to get rewards</h1>
                    <button onClick={() => setShowLoginModal(true)}>log in | sign up</button>
                </div>
                <div>
                    <h1>to skip rewards, order now</h1>
                    <button onClick={() => setShowLoginModal(true)}>order now</button>
                </div> 
            </div>

            {/* Conditional Modal Renderings */}
            {showLoginModal && (
                <LoginSignup onClose={() => setShowLoginModal(false)} />
            )}

            {showOrderModal && (
                <Order onClose={() => setShowOrderModal(false)} />
            )}
        </div>
    )
}

export default Home;