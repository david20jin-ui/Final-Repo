import React from 'react';
import '../pages/Homepage.css';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';

export default function Homepage() {
  return (
    <div className="container">
      <Hero />
      <Specials />
      <Testimonials />
    </div>
  );
}
