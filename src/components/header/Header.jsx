import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/264659322_3056004351321410_3083469736988867549_n.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi there, I am</h5>
        <h1>Luyolo Mntuyedwa,</h1>
        <h5 className="text-light" style={{color: "white"}}>a junior software developer with a love of art and this is my little corner on the internet.</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Luyolo Mntuyedwa" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header