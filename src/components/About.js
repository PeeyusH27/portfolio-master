import React from 'react';
import "./About.js";
import '../colors/colors.scss';
import '../components/About.scss';
import Htmlimg from '../images/htm.png';
import Cssimg from '../images/css.png';
import Jsimg from '../images/js.png';
import Pyimg from '../images/py.png';
import Reactimg from '../images/react.png';

const About = () => {
  return (
            <div className='about-sec'>
                <div  className='aboutsp'>
                <h1>EXPERIENCE</h1>
                <h2>Cognizant Technology Solutions</h2>
                <h3>Programmer Analyst | Full stack engineer</h3>
                <p className='about'>
                    <ol>
                        <li>Working under Application Development and Maintenance team.</li>
                        <li>Working on providing services for Zurich Insurance, Hongkong .</li> 
                    <br/>            
                        <li>Mainly focused on frontend developed web components using ReactJS.</li>            <li>Learnt Html, Css, JavaScript, ReactJS and deployment using AWS</li>
                    </ol>
                </p>

                <h2>The Sparks Foundation</h2>
                <h3>Web developer | Internship</h3>
                <p className='about'>
                    Completed 6weeks web development internship while working on and learning MERN stack projects.
                    <br/>
                    Got hands on experience on managing SQL databases
                    Designed and developed various basic to advanced UI
                </p>
                </div>

                <div  className='abttr'>
                <h1 className='abttr'>TRAININGS</h1>
                <h2>React Bootcamp</h2>
                <h3>Academind | | Udemy</h3>
                <p className='about'>
                    <ol>
                        <li>Completed 48hours of React development course</li> 
                        <li>Leart React Router, Hooks, Context API while working on self projects</li> 
                    </ol>
                </p>

                <h2>Responsive Web Design</h2>
                <h3>Free Code Camp</h3>
                <p className='about'>
                    completed 300hours of course and assignments using Html, Css andd Javascript.
                    <br/>
                    Got hands on experience of creating static web application and implementing the technologies learned during the course
                </p>
                </div>

                <div className='tech'>
                    <h1>TECHNOLOGIES KNOWN</h1>
                    <div className='grid'>
                        <img src={Htmlimg} />

                        <img src={Cssimg} />

                        <img src={Jsimg} />

                        <img src={Reactimg} />

                        <img src={Pyimg} />

                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4isY3sLRAQO0ddBYxIhAsp7iQcYz9p__RTA&usqp=CAU' />
                        {/* <ul className='size'>
                        <li><HtmlIcon fontSize='large'/></li>
                        <li><CssIcon fontSize='large'/></li>
                        <li><JavascriptIcon fontSize='large' /></li>
                        <li><GitHubIcon fontSize='large' /></li>
                        <li>5</li>
                        <li>6</li>
                        </ul> */}
                    </div>
                </div>

                <div  className='aboutedu'>
                <h1>EDUCATION</h1>
                <h2>Bachelor of Technnology</h2>
                <h3>GGSIPU | Computer Science Engineer</h3>
                <p className='abouted'>
                    2017-2021 | Grade: 8
                </p>

                <h2>Diploma</h2>
                <h3>GTBPI | Automobile Engineering</h3>
                <p className='abouted'>
                    2014-2017 | Grade: 7.5
                </p>
                </div>
            </div>
        )
    }

export default About