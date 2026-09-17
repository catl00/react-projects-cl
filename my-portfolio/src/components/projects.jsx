import '../styles/projects.css'
import { useNavigate } from 'react-router-dom';
import Matcha from '../assets/matcha.png';
import Photobooth from '../assets/photobooth.png';
import Smiski from '../assets/smiski.png';
import Portfolio from '../assets/portfolio.png';

function Projects() {
    const navigate = useNavigate();

    return (
        <div className="content">
            <div className="projects">
                <h1>Projects</h1>
                <div className='tech-stack'>
                    <h2>React</h2>
                    <div className='notes'>
                        <p>Click the thumbnail to view the GitHub link for each project</p>
                        <p>For more projects, view my <a href='https://github.com/catl00/react-projects-cl/tree/main' target='_blank' style={{ textDecoration: 'none' }} rel="noopener noreferrer">GitHub</a>.</p>
                    </div>
                    <div className='project-columns'>
                        <div className='project-details'>
                            <h3>Matcha Lovers</h3>
                            <div className='mockup'>
                                <div className="browser-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <div className='thumbnail-container'>
                                    <a className="thumbnail-link" href="https://github.com/catl00/react-projects-cl/tree/main/matcha-lovers" target="_blank" rel="noreferrer">
                                        <img className='project-ss' src={Matcha} alt="Matcha Lovers" />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Hypothetical Matcha website to view the menu and order drinks 
                                ahead of time
                            </p>
                        </div>
                        <div className='project-details'>
                            <h3>Smiski Tracker</h3>
                            <div className='mockup'>
                                <div className="browser-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <div className='thumbnail-container'>
                                    <a className="thumbnail-link" href="https://github.com/catl00/react-projects-cl/tree/main/smiski-tracker" target="_blank" rel="noreferrer">
                                        <img className='project-ss' src={Smiski} alt="Smiski Tracker" />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Check how many Smiskis you have for each collection as a one-stop 
                                place to track your Smiski collection
                            </p>
                        </div>
                        <div className='project-details'>
                            <h3>CL Photobooth</h3>
                            <div className='mockup'>
                                <div className="browser-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <div className='thumbnail-container'>
                                    <a className="thumbnail-link" href="https://github.com/catl00/react-projects-cl/tree/main/photobooth-cute" target="_blank" rel="noreferrer">
                                        <img className='project-ss' src={Photobooth} alt="CL Photobooth" />
                                    </a>
                                </div>
                            </div>
                            <p>
                                Instead of going to find a Photobooth, have one on your local 
                                device
                            </p>
                        </div>
                        <div className='project-details'>
                            <h3>Catherine's Porfoliio</h3>
                            <div className='mockup'>
                                <div className="browser-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <div className='thumbnail-container'>
                                    <a className="thumbnail-link" href="https://github.com/catl00/react-projects-cl/tree/main/my-portfolio" target="_blank" rel="noreferrer">
                                        <img className='project-ss' src={Portfolio} alt="Catherine's Portfolio" />
                                    </a>
                                </div>
                            </div>
                            <p>
                                The porfolio you are currently looking at that showcases my past work 
                                and projects as well as a page to contact me.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className='tech-stack'>
                    <h2>WordPress</h2>
                    <div className='project-columns'>
                        <div className='project-details'>
                            <h3>Nuttal's Women Health</h3>
                            <p>
                                Supported development for the NWH website to help spread word about 
                                their mission to fund research and investments to accelerate 
                                discovery, science and innovation in women’s health.
                            </p>
                            <div className='links'><a href='https://talcott.com/'>Website</a></div>
                            
                        </div>
                        <div className='project-details'>
                            <h3>Talcott Financial Group</h3>
                            <p>
                                Supported development for Talcott to enhance the experience for users
                                who need offerings to retirement solutions.
                            </p>
                            <div className='links'><a href='https://www.nuttallwomenshealth.org/'>Website</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sidebar'>
                <div className='future'>
                    <h1>Future Tech Stacks I Want To Learn/Improve</h1>
                    <ul>
                        <li>TypeScript</li>
                        <li>Flutter</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Back-End (Java/SQL/Python)</li>
                        <li>API State Management (REST & GraphQL)</li>
                        <li>WCAG/A11y</li>
                        <li>WordPress (with Custom/React plugins)</li>
                        <li>AI-Assisted Workflows & Agentic Tooling (GitHub CoPilot, Cursor)</li>
                    </ul>
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

export default Projects;