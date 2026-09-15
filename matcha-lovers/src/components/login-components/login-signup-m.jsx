// src/components/auth/LoginModal.jsx
import { useState } from 'react';
import '../../styles/login-signups/login-signup-modal.css';
import googleImg from '../../assets/images/google-plus.png';
import facebookImg from '../../assets/images/facebook.png';
import viewImg from '../../assets/images/view.png';
import hideImg from '../../assets/images/hide.png';

function LoginModal( { onClose }) {
    const [showPass, setShowPass] = useState(false);

    /**
     * password toggle handler, when handler is used, inverse the booleans
     * default state is password is hidden
     */ 

    const togglePW = () => {
        setShowPass(!showPass);
    };


    return (
        <div>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <span on onClick={onClose} className="close"> &times; </span>
                    {/* component for user to log in their existing acccount */}
                    <div className="login-m">
                        <h2 className="ls-header-m">log in to your account</h2>
                        <form>
                            {/* email field */}
                            <label htmlFor="email">
                                <span>email</span>
                                <input type="text" />
                            </label>
                            {/* password field */}
                            <label htmlFor="password">
                                <span>password</span>
                                <div className="password-wrap-m">
                                    <input type={showPass ? "text" : "password"}/>
                                    <button type="button" id="show-pass" onClick={togglePW}>
                                        <img
                                            id="show-pass"
                                            src={showPass ? hideImg : viewImg}
                                            alt="Show Password"
                                        />
                                    </button>
                                </div>
                                <a href="" className="text-link-m"> forgot password? </a>
                            </label>
                            {/* login button */}
                            <input type="button" value="log in" id="log-in" />
                        </form>
                        {/* log in via social media */}
                        <div className="sns-m">
                            <h2 className="sns-header-m">login using social accounts</h2>
                            <div className="icons-m">
                                <a href="">
                                    <img src={googleImg} alt="google-plus-logo"/>
                                </a>
                                <a href="">
                                    <img src={facebookImg} alt="facebook-logo"/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    {/* sign up */}
                    <div className="signup-m">
                        <h2 className="ls-header-m">new?</h2>
                        <img src="images/matcha logo.png" alt="matcha-logo" className="matcha-logo-m"/>
                        <p>sign up and order ahead!</p>
                        <input type="button" value="sign up" id="sign-up" />
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default LoginModal;