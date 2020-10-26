import React from 'react'
import { Button } from './Button';
import '../App.css';
import './Detail.css';
import { Link } from 'react-router-dom';

function Detail() {
    return (
        <div className='Detail'>
        <div className='Detail-container'>
            <h1>Fashow Jewellers</h1>
            <h2>Fashow Jewellers has proven its reliability through 5 decades of serving you. Fashow Jewellers has proven its commitment to giving you not only a piece of jewellery but a beautiful experience to cherish throughout your life. Fashow Jewellers stands by its lifetime’s guarantee by being with you forever.Best Jeweller in Sri Lanka.</h2>
            <div className='detail-btns'>
            <Link
                to='/about-us'
                              
              >
                
              </Link>
            
          
          <Button buttonStyle='btn--outline1' buttonSize='btn--large1'>Discover More</Button>
            </div>

         </div> 
         </div> 
        
    )
}

export default Detail;
