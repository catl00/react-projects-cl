import '../styles/homepage.css'
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="content">
            <div className="about">
                <h1>Welcome to Catherine's Porfolio!</h1>
                <p>
                    I’m a developer who bridges the gap between technical architecture and UI/UX 
                    design. Starting with a background in back-end development and data analytics 
                    (SQL, Java, Python), I developed a strong foundation in application logic and 
                    dashboards. My time as a Technology Consultant within Ernst & Young's Digital 
                    Engineering team sparked a passion for front-end engineering (HTML, CSS, 
                    JavaScript) and user-centric design. Today, my goal is to build applications 
                    that are not only visually engaging and intuitive, but also highly performant 
                    and functional behind the scenes.
                </p>
                <div className='images'>
                    <img src="./src/assets/Cinnamoroll.jpg" alt="Cinnamoroll"/>
                    <img src='./src/assets/Miffy.jpg' alt="Miffy"/>
                    <img src='./src/assets/Hello Kitty.png' alt="Hello Kitty"/>
                </div>
                <p className='fyi'>Photos are not mine. No Copyright Infringement Intended.</p>
                
            </div>
            <div className='sidebar'>
                <div className='key-points'>
                    <h1>Key Points</h1>
                    <div className="key-point">
                        <h2>Full Stack Vision with a Front End Focus</h2>
                        <ul>
                            <li>
                                Transitioned from back-end/data fundamentals (Java, Python, SQL) into
                                front-end development, driven by a desire to blend technical execution
                                with creative design.
                            </li>
                        </ul>
                    </div>
                    <div className="key-point">
                        <h2>Bridge Between UX/UI &amp; Code</h2>
                        <ul>
                            <li>
                                Experience at Ernst &amp; Young (Digital Engineering) sparked a focus on
                                creating applications that are both visually engaging and technically
                                robust.
                            </li>
                        </ul>
                    </div>
                    <div className="key-point">
                        <h2>Goal-Driven Developer</h2>
                        <ul>
                            <li>
                                Actively seeking roles where I can leverage both design intuition and
                                modern web technologies (HTML, CSS, JavaScript) to build seamless,
                                user-centric web applications.
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className='actions'>
                    <button className='button'>
                        <a href="/resume.pdf" download="Catherine_Le_Resume.pdf">Download Resume</a>
                    </button>
                    <button onClick={() => navigate('/contact')}>Contact Me</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;