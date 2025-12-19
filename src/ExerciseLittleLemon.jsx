import React from 'react';
import './ExerciseLittleLemon.css';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';

export default function ExerciseLittleLemon() {
  return (
    <div className="container">
      <Hero />
      <Specials />
      <Testimonials />
    </div>
  );
}


