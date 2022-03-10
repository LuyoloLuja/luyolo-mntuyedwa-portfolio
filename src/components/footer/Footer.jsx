import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/luyolo-mntuyedwa-48b593201/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://www.facebook.com/luyololuja.mntuyedwa/" target="_blank"><BsFacebook/></a>
        <a href="https://twitter.com/iamLuyolo" target="_blank"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
          <small>&copy; Luyolo Mntuyedwa. All rights reserved. 2022</small>
        </div>
    </footer>
  )
}

export default Footer