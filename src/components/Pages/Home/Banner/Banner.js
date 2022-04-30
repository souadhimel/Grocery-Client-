import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block"  style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/GpgFrys/pexels-polina-tankilevitch-3872406.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
       style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/M6B0sfb/healthy-close-up-flatlay-featuring-celery.jpg"
      alt="Second slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block" style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/mHwvdDP/harvest-1329043.jpg"
      alt="Third slide"
    />
  
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;