import React from 'react'
import './Hero.css'
import './Navbar.css'
import video1 from '../videos/video-1 (1).mp4'
import { Button } from './Button'

export default function Hero() {
  return (
    <div className='hero-container'>
        <video src={video1} autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
            
            buttonStyle="btn--outline">
            
                GET STARTED
            </Button>
            <Button
            
            buttonStyle="btn--outline">
          
                WATCH TRAILER<i className='far fa-play-circle'/>
            </Button>



        </div>
      
    </div>
  )
}
