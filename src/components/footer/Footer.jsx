import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>luyoloMntuyedwa</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* <h4>Add me on:</h4> */}
        <a href="https://www.linkedin.com/in/luyolo-mntuyedwa-48b593201/"><AiFillLinkedin/></a>
        <a href="https://www.facebook.com/luyololuja.mntuyedwa/"><BsFacebook/></a>
        <a href="https://twitter.com/iamLuyolo_"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
          <small>&copy; Luyolo Mntuyedwa. All rights reserved. 2022</small>
        </div>
    </footer>
  )
}

export default Footer