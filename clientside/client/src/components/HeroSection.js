import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Results.mp4' autoPlay loop muted />
      
      <h1>FASHOW JEWELLERY</h1>
      <h2>EXCLUSIVE JEWELLERY AND GEM COLLECTION</h2>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
     

    </div>

    

    
  );
}

export default HeroSection;
