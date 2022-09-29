import React from 'react'
import Resumep from '../images/Resume.PNG';
import './Resume.scss';

const Resume = () => {
  return (
    <div className='resumeimg'>
      <a href='https://drive.google.com/file/d/1cJiCmZEkgBZGGO22WwPLX0672vvPRhuB/view?usp=sharing' target="_blank">
      <img src={Resumep} alt='Peeyush resume'/>
      </a>
    </div>
  )
}

export default Resume
