import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our EPIC Catergories!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14.jpg'
              text='Rings'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-15.png'
              text='Necklaces'
              label='Luxury'
              path='/services'
            />
          </ul>
          </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-16.jpg'
              text='Ear-rings'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-17.jpg'
              text='Pendants'
              label='Adventure'
              path='/products'
            />
            
          </ul>
        </div>
       </div>
    </div>
  );
}

export default Cards;
