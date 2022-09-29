import React from 'react'
import Resumep from '../images/Resume.PNG';
import './Resume.scss';

const Resume = () => {
  return (
    <div className='resumeimg'>
      <a href='https://drive.google.com/file/d/1RMroXh7i2Ez_M7zq78h_9GXFYL2_P6i2/view?usp=sharing' target="_blank">
      <img src={Resumep} alt='Peeyush resume'/>
      </a>
    </div>
  )
}

export default Resume
