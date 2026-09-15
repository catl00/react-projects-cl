// src/components/auth/LoginPage.jsx
import { useState } from 'react';
import '../../styles/login-signups/login-signup.css';
import googleImg from '../../assets/images/google-plus.png';
import facebookImg from '../../assets/images/facebook.png';
import viewImg from '../../assets/images/view.png';
import hideImg from '../../assets/images/hide.png';

function LoginPage() {
    const [showPass, setShowPass] = useState(false);

    const togglePW = () => {
        setShowPass(!showPass);
    };

    return (
        <div className='background'>
            <div className='ls-page'>
                <div className='login'>
                    <h2 className="ls-header">log in to your account</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* email */}
                        <label htmlFor='email'>
                            <span>email</span>
                            <input type='email' />
                        </label>
                        {/* password */}
                        <label htmlFor='password'>
                            <span>password</span>
                            <div className='password-wrap'>
                                <input type={showPass ? "text" : "password"}/>
                                <button type="button" id="show-pass" onClick={togglePW}>
                                    <img
                                        id="show-pass"
                                        src={showPass ? hideImg : viewImg}
                                        alt="Show Password"
                                    />
                                </button>
                            </div>
                            <a href='#forgot' className='text-link'>forgot password?</a>
                        </label>
                        {/* login button */}
                        <input type="button" value="log in" id="log-in" />
                    </form>
                    {/* log in via social media */}
                    <div className="sns">
                        <h2 className="sns-header">login using social accounts</h2>
                        <div className="icons">
                            <a href=""><img src={googleImg} alt="google-plus-logo"/></a>
                            <a href=""><img src={facebookImg} alt="facebook-logo"/></a>
                        </div>
                                
                    </div>
                </div>
                
                {/* sign up page */}
                <div className="signup">
                    <h2 className="ls-header">new?</h2>
                    <p>sign up and order ahead!</p>
                    <input type="button" value="sign up" id="sign-up" />
                </div> 
            </div>
            <div className='welcome'/>
        </div>
    );
}

export default LoginPage;