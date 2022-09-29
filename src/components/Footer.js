import React from 'react'
import './Footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icons'>
            <li>
              <a href='https://www.instagram.com/peeyush_das/' target='_blank'>
                <InstagramIcon fontSize='large'/>
              </a>
            </li>
            
            <li>
              <a href='https://github.com/PeeyusH27' target='_blank'>
                <GitHubIcon fontSize='large'/>
              </a>
            </li>

            <li>
              <a href='https://www.hackerrank.com/peeyushdas27?hr_r=1' target='_blank'>
                <CodeIcon fontSize='large'/>
              </a>
            </li>
        </div>
        <div className='links'>
            <li>Peeyush Chandra Das   ||  Portfolio App  ||   2022</li>
            {/* <li>random text</li>
            <li>random text</li>
            <li>random text</li> */}
        </div>
    </div>
  )
}

export default Footer;