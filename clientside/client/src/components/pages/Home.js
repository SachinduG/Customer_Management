import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Detail from '../Detail';
import Footer from '../Footer';
import Jewellery from '../Jewellery';

function Home() {
  return (
    <>
      <HeroSection />
      
      <Detail />
      
      <Cards />
      <Jewellery/>
      
      
    </>
  );
}

export default Home;
