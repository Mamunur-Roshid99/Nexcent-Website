import React from 'react'
import HeroSection from './HeroSection';
import Client from './Client';
import Coummunity from './Coummunity';

const Hero = () => {
  return (
    <main className='flex flex-col gap-10 mb-5'>
      <HeroSection />
      <Client />
      <Coummunity />
    </main>
  );
}

export default Hero
