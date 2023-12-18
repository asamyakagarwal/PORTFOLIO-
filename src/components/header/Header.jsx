import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assests/my-image.jpg'
import HeaderSocials from './HeaderSocials';
import {BsArrowDownCircle} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>SAMYAK AGARWAL</h1>
        <h5 className="text_light">FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
            <img src={ME} alt="me" className="responsive-image" />
        </div>

        <a href="#footer" className='scroll__down'><BsArrowDownCircle/></a>
      </div>
    </header>
  )
}

export default Header
