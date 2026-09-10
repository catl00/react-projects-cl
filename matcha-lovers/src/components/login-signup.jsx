import {useState} from "react";
import '../styles/login-signup.css';
import googleImg from '../assets/images/google-plus.png';
import facebookImg from '../assets/images/facebook.png';
import viewImg from '../assets/images/view.png';
import hideImg from '../assets/images/hide.png';

/**
 * 
 * @component This component renders the login and signip modal for the Matcha Lovers application. 
 * It includes a form for users to enter their username and password or use social media to login. 
 * Additionally, it provides a link for users who do not have an account to sign up. 
 * 
 */

function LoginSignup( { show, close }) {
    const [showPass, setShowPass] = useState(false);

    /**
     * password toggle handler, when handler is used, inverse the booleans
     * default state is password is hidden
     */ 

    const togglePW = () => {
        setShowPass(!showPass);
    };

    if (!show) {
        return <></>;
    }


    return (
        <div>
            <div className="modal-overlay">
                <div className="modal">
                    <span on onClick={close} className="close"> &times; </span>
                    {/* component for user to log in their existing acccount */}
                    <div className="login">
                        <h2 className="ls-header">log in to your account</h2>
                        <form>
                            {/* email field */}
                            <label htmlFor="email">
                                <span>email</span>
                                <input type="text" />
                            </label>
                            {/* password field */}
                            <label htmlFor="password">
                                <span>password</span>
                                <div className="password-wrap">
                                    <input type={showPass ? "text" : "password"}/>
                                    <button type="button" id="show-pass" onClick={togglePW}>
                                        <img
                                            id="show-pass"
                                            src={showPass ? hideImg : viewImg}
                                            alt="Show Password"
                                        />
                                    </button>
                                </div>
                                <a href="" className="text-link"> forgot password? </a>
                            </label>
                            {/* login button */}
                            <input type="button" value="log in" id="log-in" />
                        </form>
                        {/* log in via social media */}
                        <div className="sns">
                            <h2 className="sns-header">login using social accounts</h2>
                            <div className="icons">
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
                    <div className="signup">
                        <h2 className="ls-header">new?</h2>
                        <img src="/matcha logo.png" alt="matcha-logo" className="matcha-logo"/>
                        <p>sign up and order ahead!</p>
                        <input type="button" value="sign up" id="sign-up" />
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;