import React from 'react';
import './works.css';
import Portfolio from '../../assets/portfolio.png';

export const Works = () => {
  return (
   <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the sammels details and  sufiud fudbfa fausbfauwidaw dqwiu3rweuifb fsydbfsdyufbs DFAFDUAYRTYRQB GUVYFBUGH VVAV ISUHDOAUSNDK SNA SDJH biuhsif sdfbshd fsdhbfsdbfia,hbadlukb fvadfhbrufhbairlygfhf  </span>
        <div className='worksImgs'>
            <img src={Portfolio} alt=''className='worksImg'/>
            <img src={Portfolio} alt=''className='worksImg'/>
            <img src={Portfolio} alt=''className='worksImg'/>
            <img src={Portfolio} alt=''className='worksImg'/>
            <img src={Portfolio} alt=''className='worksImg'/>
            <img src={Portfolio} alt=''className='worksImg'/>
        </div>
        <button className='workBtn'>See More</button>

   </section>
  )
}

export default Works;