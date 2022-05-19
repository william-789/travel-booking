import React from 'react'
import './Sections.css'
import cinqueterre from './imagens/cinqueterre.jpg'
import newyork from './imagens/newyork.jpg'
import sanfrancisco from './imagens/sanfran.jpg'
import pisa from './imagens/pisa.jpg'
import paris from './imagens/paris.jpg'


function Offers() {
  return (
    <section className='sections'>
      <h1>Good Offers Right Now</h1>
      <p>Up to <span>50%</span> discount.</p>
      <div className='images'>
        <div className='half'>
          <img src={cinqueterre} alt='Cinque Terre'></img>
          <div className='text'>Cinque Terre</div>
        </div>
        <div className='half'>
          <div className='half'>
            <img src={newyork} alt='New York'></img>
            <div className='text'>New York</div>
          </div>
          <div className='half'>
            <img src={sanfrancisco} alt='San Francisco'></img>
            <div className='text'>San Francisco</div>
          </div>
          <div className='half'>
            <img src={pisa} alt='Pisa'></img>
            <div className='text'>Pisa</div>
          </div>
          <div className='half'>
            <img src={paris} alt='Paris'></img>
            <div className='text'>Paris</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers

/*

          <div className='images top'>
            <div className='image'>
              <img src={newyork} alt='New York'></img>
              <div className='text'>New York</div>
            </div>
            <div className='image'>
              <img src={sanfrancisco} alt='San Francisco'></img>
              <div className='text'>San Francisco</div>
            </div>  
          </div>
          <div className='images bottom'>
            <div className='image'>
              <img src={pisa} alt='Pisa'></img>
              <div className='text'>Pisa</div>
            </div>
            <div className='image'>
              <img src={paris} alt='Paris'></img>
              <div className='text'>Paris</div>
            </div>
          </div> 
*/