import React from 'react';
import './ExerciseLittleLemon.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function ExerciseLittleLemon() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <Footer />
    </div>
  );
}
