import React from 'react';
import Carousel from './imageCarousel';

const Home = () => {
  return (
    <div>
      <div style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/5801528/pexels-photo-5801528.jpeg")', 
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
        <h1>Welcome to CyberScent</h1>
        <h2 style={{ marginTop: '-20px', fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>The premier web candle depot</h2>
      </div>
      {/*page description*/}
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
        <h3>About us:</h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Introducing CyberScent, your premier online destination for exquisite scented candles. </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>CyberScent is your go-to for elevating any space with luxury and indulgence. Discover the perfect candle to ignite your senses today.</p>
      </div>
      {/*image carousel section*/}
      <Carousel />
    </div>
  );
};

export default Home;
