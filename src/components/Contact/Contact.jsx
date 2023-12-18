import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef() ;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qu27wk5', 'template_fa29mm9', form.current, 'lbO3SvpNqfeVuLEeA')
    
    e.target.reset() ;
      
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
         <div className='contact__options'>


            <article className='contact__option'>
                <MdOutlineEmail  className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>samyakagarwal7may@gmail.com</h5>
                <a href='mailto:samyakagarwal7may@gmail.com'>Send a message</a>
            </article>

            <article className='contact__option'>
                <RiMessengerLine  className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>facebook wala</h5>
                <a href='https://m.me/samyak-agarwal'>Send a message</a>
            </article>


            <article className='contact__option'>
                <BsWhatsapp  className='contact__option-icon'/>
                <h4>BsWhatsapp</h4>
                <h5>+91 9351153081</h5>
                <a href="https://api.whatsapp.com/send?phone=+91 9351153081">Send a message</a>
            </article>
         </div>

         {/* (Form code) */}

         <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your full name' required/>
            <input type='email' name='email' placeholder='Your email' required/>
            <textarea name='message' rows="7" placeholder='your message' required></textarea>
            <button type='submit' className='btn btn-primary'>send message</button>
         </form>

      </div>
      
    </section>
  )
}

export default Contact 
