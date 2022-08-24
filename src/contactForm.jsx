import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import './contactForm.css'
const Subscribe = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4kny6lw', 'template_xug6etu', form.current, '2V-2yPPskamQtDpoN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form className='container2' ref={form} onSubmit={sendEmail}>
        <label className='title'> Dev@Deakin </label>
        <input className='email' placeholder='enter your email' type="email" name="user_email" />
        <input className='btn' type="submit" value="Subscribe" />
      </form>
    )
  }

  export default Subscribe