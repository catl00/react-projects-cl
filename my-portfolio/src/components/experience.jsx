import '../styles/experience.css'
import { useNavigate } from 'react-router-dom';

function Experience() {
    const navigate = useNavigate();

    return (
        <div className="content">
            <div className="experience">
                <h1>Experience</h1>
                <div className='experience-list'>
                    <article>
                        <div className='job-date'>2022 - 2025</div>
                        <div className='job-details'>
                            <h2>Technology Consultant</h2>
                            <h3><a href='https://www.ey.com/en_us'>Ersnt &amp; Young LLP</a></h3>
                            <p>
                                Partnered with clients to deliver <strong>modern, user-centric web solutions</strong> by
                                combining <strong>front-end development, design collaboration, and technical
                                implementation</strong> expertise.
                            </p>
                            <p><strong>Skills:</strong> HTML-CSS, React.js, MySQL, JIRA, ADO, WordPress, Figma, Git, Visual Studio, Power Pages</p>
                        </div>
                    </article>

                    <article>
                        <div className='job-date'>2021 - 2022</div>
                        <div className='job-details'>
                            <h2>Research and Reporting Intern</h2>
                            <h3><a href='https://www.navyfederal.org/'>Navy Federal Credit Union</a></h3>
                            <p>
                                Designed and implemented <strong>data-driven solutions</strong> by building <strong>automated
                                dashboards</strong>, integrating <strong>SQL data sources</strong>, and streamlining <strong>workflows</strong> for
                                enhanced analytics performance.
                            </p>
                            <p><strong>Skills:</strong> Power BI, Tableau, SQL</p>
                        </div>
                    </article>
                    <div className='notes'>
                        <p>For more details from my past work experiences, please review my resume by clicking the <strong>Download Resume</strong> button.</p>
                    </div>
                </div>
            </div>
            <div className='sidebar'>
                <div className='skills'>
                    <h1>Skills</h1>
                    <div class="skill-groups">
                        <h2>Primary Development Stack</h2>
                        <ul>
                            <li><strong>Front-End Core</strong>: JavaScript, HTML/CSS, React.js</li>
                            <li><strong>Back-End &amp; Data</strong>: Java, Python, SQL / MySQL</li>
                            <li><strong>Content &amp; Low-Code Platforms</strong>: WordPress, Power Pages, Power Apps</li>
                        </ul>
                    </div>
                    <div class="skill-groups">
                        <h2>Methodologies</h2>
                        <ul>
                            <li><strong>Design &amp; User Experience</strong>: Responsive &amp; Accessible Design, Figma, Data Visualization (Power BI)</li>
                            <li><strong>Development Lifecycle</strong>: Agile / Scrum, SDLC, Requirements &amp; User Stories</li>
                        </ul>
                    </div>
                    <div class="skill-groups">
                        <h2>Tools &amp; Collaboration</h2>
                        <ul>
                            <li><strong>Version Control &amp; DevOps</strong>: Git / GitHub, Azure DevOps (Boards &amp; Test Plans)</li>
                            <li><strong>Project Tracking &amp; QA</strong>: JIRA, Manual Quality Assurance, Technical Documentation</li>
                            <li><strong>Productivity &amp; Automation</strong>: Power Automate, Microsoft 365, Google Workspace</li>
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

export default Experience;