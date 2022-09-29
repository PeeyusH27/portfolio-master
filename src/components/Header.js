import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Home from './Home';
import Projects from './Projects';

const Header = () => {
  return (
    <div className='header'>
        <div className='navlinks'>
          <ul>
          <li><a href="/"><Link to='/' element={<Home />}/>Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
    </div>
  )
}


export default Header