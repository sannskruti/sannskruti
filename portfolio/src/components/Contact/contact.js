import React from 'react'
import './contact.css';
import clientImg from '../../assets/company.jpg';
import linkedin from '../../assets/linked.png';
import insta from '../../assets/insta.jpg';
import git from '../../assets/git.png';
import fb from '../../assets/fb.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'> My Clients</h1>
            <p className='clientDesc'>
                I have had the oppurtunity to work with a diverse group of companies some of the notable cvom sdjnfkasn fabnj fyufbg bfuyfda vjbv uaf bfua vb sfuvg dvbs ugsfbsguv sfbbhsdv sdfv 
            </p>
            <div className='clientImgs'>
                <img src={clientImg} alt='client' className='clientImg'/>
                <img src={clientImg} alt='client' className='clientImg'/>
                <img src={clientImg} alt='client' className='clientImg'/>
                <img src={clientImg} alt='client' className='clientImg'/>

            </div>
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any oppurtunity</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Name'/>
                <textarea className='msg' name='message' rows={5} placeholder='Your Message' ></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={linkedin} alt="linkedIn" className='link'/>
                    <img src={git} alt="github" className='link'/>
                    <img src={insta} alt="insta" className='link'/>
                    <img src={fb} alt="facebook" className='link'/>


                </div>
            </form>
           
        </div>
        
        
    </section>
  )
}
export default Contact;
