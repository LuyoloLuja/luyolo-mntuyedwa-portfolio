import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import {FiMail} from 'react-icons/fi';
import {BsMessenger} from 'react-icons/bs';
import {FaWhatsappSquare} from 'react-icons/fa';

import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p680l5k', 'template_5e13ihr', form.current, 'igLS2OdOHf26z7IcT')
      .then((result) => {
          console.log(result.text);
          alert("Form Submitted");
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>luyolo.mntuyedwa97@gmail.com</h5>
            <a href="mailto:luyolo.mntuyedwa97@gmail.com" target="_blank" rel="noopener noreferrer">send an email</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Luyolo Mntuyedwa</h5>
            <a href="https://m.me/luyololuja.mntuyedwa" target="_blank" rel="noopener noreferrer">send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2779 132 2482</h5>
            <a href="https://api.whatsapp.com/send?phone=+27791322482" target="_blank" rel="noopener noreferrer">send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact