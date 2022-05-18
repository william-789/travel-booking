import React, { useState } from 'react'
import { FaPlane, FaBed, FaCar } from 'react-icons/fa';
import './Booking.css'

function Booking() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className='firstSection'>
        <div className='booking'>
            <ul role='tablist' className='tablist'>
                <li role='tab' className={activeTab === 0 ? 'active':null} onClick={() => {setActiveTab(0)}}><FaPlane /><a href='#flight' role='presentation'> Flight</a></li>
                <li role='tab' className={activeTab === 1 ? 'active':null} onClick={() => {setActiveTab(1)}}><FaBed /><a href='#hotel' role='presentation'> Hotel</a></li>
                <li role='tab' className={activeTab === 2 ? 'active':null} onClick={() => {setActiveTab(2)}}><FaCar /><a href='#rental' role='presentation'> Rental</a></li>
            </ul>
            <div className='tabSection' id='flight' hidden={activeTab !== 0}>
                <h1>Travel the world with us</h1>
                <div className='inputs'>
                  <label htmlFor='origin'>From</label>
                  <input id='origin' placeholder='Departing from'></input>  
                </div>
                <div className='inputs'>
                  <label htmlFor='destination'>To</label>
                  <input id='destination' placeholder='Arriving at'></input>  
                </div>
                <button type='submit'>Search and find dates</button>
            </div>
            <div className='tabSection' id='hotel' hidden={activeTab !== 1}>
                <h1>Stay comfortable</h1>
                <div className='inputs'>
                  <label htmlFor='origin'>From</label>
                  <input id='origin' placeholder='Check-in date'></input>  
                </div>
                <div className='inputs'>
                  <label htmlFor='destination'>To</label>
                  <input id='destination' placeholder='Check-out date'></input>  
                </div>
                <button type='submit'>Search and find dates</button>
            </div>
            <div className='tabSection' id='rental' hidden={activeTab !== 2}>
                <h1>Be wherever you want, whenever you want</h1>
                <div className='inputs'>
                  <label htmlFor='origin'>Pick-up</label>
                  <input id='origin' placeholder='Pick-up date'></input>  
                </div>
                <div className='inputs'>
                  <label htmlFor='destination'>Return</label>
                  <input id='destination' placeholder='Return date'></input>  
                </div>
                <button type='submit'>Search and find dates</button>
            </div>
        </div>
        
    </section>
  )
}

export default Booking

/*Missing
Aria labels and stuff*/