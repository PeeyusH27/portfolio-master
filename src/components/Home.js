import React from 'react'
import './Home.scss';
import Profile from '../images/profile.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='intro'>

        <img className='image' src={Profile} alt='profile image' />


        <div className='about'>
          <div className='introbody'>
          <h1 className='typewriter'>Peeyush Chandra Das</h1>
          <h3>Frontend Developer</h3>
          <p>
          Iām a Computer Science graduate from Delhi, India
          I would introduce myself as a tech enthusiast & a learner š
          I'm someone who is deeply passionate about Frontend Development, mostly found having coffee ā and coding while listening š§ to music šµ
          </p>


          <h2 className='btn'>Check more about me</h2>
          <button className='myBtn'><a href='/about'>About Me</a></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home