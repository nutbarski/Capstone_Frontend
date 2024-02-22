import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/11978823/pexels-photo-11978823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" style={{ width: '500px', height: '500px', margin: '0 auto' }} />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/6681848/pexels-photo-6681848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" style={{ width: '500px', height: '500px', margin: '0 auto' }} />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/5816949/pexels-photo-5816949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" style={{ width: '500px', height: '500px', margin: '0 auto' }} />
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
