import React from 'react'
import './Projects.scss';
import Movies from '../images/movies.PNG';
import Linkedin from '../images/Linkedinclone.PNG';
import download from '../images/download.jfif';

const Projects = () => {
  return (
    <div className='projects'>
      
      <div className='card'>
        <div className='projimage'>
          <img src={Movies} />
          </div>
          <div className='abtproject'>
            <h1>Movies App</h1>
            <p className='projp'>In this project I have developed a web application using React, Redux, SCSS and Omdb API.
            Here you can get information about shows and movies which are being fetched through api calls.</p>
            <button className='btna'><a href='https://github.com/PeeyusH27/movies' target='_blank'>Github Link</a></button>
            <button className='btna'><a href='https://movies-app-peeyush.netlify.app' target='_blank'>Demo</a></button>
          </div>
      </div>
      
      <div className='card'>
        <div className='projimage'>
        <img src={Linkedin} />
          </div>
          <div className='abtproject'>
            <h1>LinkedIn Clone</h1>
            <p className='projp'>This is a clone project of Linked In social networking platform.
            Here I've used React, Redux for frontend and Firebase for backend<br/>
            Users can register accounts and can later sign in through the same to post content.</p>
            <button className='btna'><a href='https://github.com/PeeyusH27/linkedin' target='_blank'>Github Link</a></button>
            <button className='btna'><a>Demo</a></button>
          </div>
      </div>


      {/* <div className='card'>
        <div className='projimage'>
        <img src={download} />
          </div>
          <div className='abtproject'>
            <h1>Shopping Cart</h1>
            <p className='projp'>This is some random text about the shit that I've copied from github This is some random text about the shit that I've created, this is project description which my lazy ass is not able to update yet</p>
            <button className='btna'><a href='' target='_blank'>Github Link</a></button>
            <button className='btna'><a>Demo</a></button>
          </div>
      </div> */}

      <div className='card'>
        <div className='projimage'>
        <img src={download} />
          </div>
          <div className='abtproject'>
            <h1>Desktop Assistant</h1>
            <p className='projp'>This is some random text about the shit that I've created, this is project description which my lazy ass is not able to update yet</p>
            <button className='btna'><a href='https://github.com/PeeyusH27/Desktop-assistant' target='_blank'>Github Link</a></button>
            {/* <button className='btna'><a>Demo</a></button> */}
          </div>
      </div>

    </div>
  )
}

export default Projects