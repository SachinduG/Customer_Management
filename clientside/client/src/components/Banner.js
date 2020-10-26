import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Banner.css';

function Banner() {
    return (

        <div className='banner-container'>
            <video src='/videos/video-8.mp4' autoPlay loop muted />
            <h1>CONTACT US</h1>
            
        </div>
    )
}

export default Banner;
