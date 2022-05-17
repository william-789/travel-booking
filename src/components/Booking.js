import React from 'react'
import { FaPlane, FaBed, FaCar } from 'react-icons/fa';
import './Booking.css'

function Booking() {
  return (
    <section className='firstSection'>
        <div className='booking'>
            <ul role='tablist' className='tablist'>
                <li role='tab'><FaPlane /><a href='' role='presentation'> Flight</a></li>
                <li role='tab'><FaBed /><a href='' role='presentation'> Hotel</a></li>
                <li role='tab'><FaCar /><a href='' role='presentation'> Rental</a></li>
            </ul>
            <div className='tabSection'>
                <h1>Travel the world with us</h1>
                <div className='inputs'>
                  <label for='origin'>From</label>
                  <input id='origin' placeholder='Departing from'></input>  
                </div>
                <div className='inputs'>
                  <label for='destination'>To</label>
                  <input id='destination' placeholder='Arriving at'></input>  
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Booking

/*Missing
Aria labels and stuff*/