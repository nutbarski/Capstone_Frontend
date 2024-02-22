import React from 'react';
import Carousel from './imageCarousel';

const Services = () => {
  return (
    <div>
      <div style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg")', 
        backgroundSize: 'cover', 
        height: '400px', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white', 
        fontSize: '2rem', 
        fontFamily: 'Arial, sans-serif',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}>
        <h1>Our Services</h1>
        <h2 style={{ marginTop: '-20px', fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>a flawless shipping experience</h2>
      </div>
      {/* Description section */}
      <div style={{ 
        backgroundColor: '#D2B48C',
        padding: '20px', 
        textAlign: 'center', 
        fontFamily: 'Arial, sans-serif', 
        color: 'white', 
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)'
      }}>
        <h3>We strive for the best!</h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>At CyberScent, we pride ourselves on delivering more than just exceptional candles—we also offer a flawless shipping experience!</p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Trust CyberScent for perfect shipping that matches the quality of our products.</p>
      </div>
      {/*image carousel section*/}
      <Carousel />
    </div>
  );
};

export default Services;