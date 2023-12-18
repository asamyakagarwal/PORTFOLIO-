import React from 'react'
import './Footer.css'

import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Samyak </a>

      <ul className='permalinks'>
        <li><a href="#">Start </a></li>
        <li><a href="#about">About </a></li>
        <li><a href="#portfolio">Projects </a></li>
        <li><a href="#contact">contact me here </a></li>
      </ul>

      <div className="footer__socials">
        <a target='_blank' href="https://www.linkedin.com"><BsLinkedin/></a>
        <a target='_blank' href="https://github.com"><BsGithub/></a>
        <a target='_blank' href="https://www.instagram.com"><BsInstagram/></a>
      </div>


      <div className="footer__copyright">
        <small>
          &copy; all rights reserved
        </small>
      </div>

    </footer>
  )
}

export default Footer
