import React from 'react'
import './Sections.css'
import ocean from './imagens/ocean.jpg'
import mountains from './imagens/mountains.jpg'

function Nature() {
  return (
    <section className='sections'>
      <h1>Explore Nature</h1>
      <p>Travel with us and see nature at its finest</p>
      <div className='images'>
        <div className='half nature'>
          <img src={ocean} alt='Ocean'></img>
          <div className='info'></div>
        </div>
        <div className='half nature'>
          <img src={mountains} alt='Mountains'></img>
          <div className='info'></div>
        </div>
      </div>
    </section>
  )
}

export default Nature