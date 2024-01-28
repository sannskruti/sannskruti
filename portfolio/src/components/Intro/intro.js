import React from 'react';
import './intro.css';
import bg from '../../assets/bg.jpeg';
import { Link } from 'react-scroll';
import btnImg from "../../assets/hireMe.png";

export const Intro = () => {
  return (
   <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sanskruti</span> <br/>Software Engineer </span>
            <p className='introPara'> I am a skilled software engineer with 4.5 years of experince in 
              creating visually and userfriendly websites and application.</p>
            <Link><button className='btn'><img src={btnImg} alt='hireMe' className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src={bg} alt=''className='bg'/>

   </section>
  )
}
export default Intro;
