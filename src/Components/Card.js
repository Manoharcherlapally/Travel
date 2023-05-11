import React from 'react'
import Carditem from './Carditem'
import './Card.css'
import image9 from '../images/img-9.jpg'
import image2 from '../images/img-2.jpg'
import image3 from '../images/img-3.jpg'
import image4 from '../images/img-4.jpg'
import image8 from '../images/img-8.jpg'
export default function Card() {
  return (
    <div className='cards'>
        <h1>Check out the Epic Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src={image9}
                    text='Explore the hidden waterfall deep inside the amazon jungle'
                    label='Adventure'
                    path='/services'
                    />
                     <Carditem
                    src={image2}
                    text='Travel through the Island of Bali in a Private cruise'
                    label='Luxury'
                    path='/services'
                    />

                </ul>
                <ul className='cards__items'>
                    <Carditem
                    src={image3}
                    text='Set sail in the Atlantic ocean visiting uncharted waters'
                    label='Mystery'
                    path='/services'
                    />
                     <Carditem
                    src={image4}
                    text='Experience Football on the Top of the Himalayan Mountains'
                    label='Adventure'
                    
                    />
                     <Carditem
                    src={image8}
                    text='Ride through Sahara Desert on a guided camel tour.'
                    label='Adventure'
                    path='/sign-up'
                    />

                </ul>


            </div>

        </div>
      
    </div>
  )
}
