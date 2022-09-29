import React from 'react'
import Resumep from '../images/Resume.PNG';
import './Resume.scss';

const Resume = () => {
  return (
    <div className='resumeimg'>
      <a href='https://drive.google.com/file/d/1ah3_uHK6UaQ2E6BI_a7Wh5-x5dNdXL6m/view?usp=sharing' target="_blank">
      <img src={Resumep} alt='Peeyush resume'/>
      </a>
    </div>
  )
}

export default Resume
