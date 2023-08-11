import React from 'react';
import { Carousel } from 'react-bootstrap';


const ImageCarousel = () => {
  return (
     <Carousel>
     <Carousel.Item>
     <img src="img/caro-1.svg" alt="Image 1" />
     </Carousel.Item>
     <Carousel.Item>
     <img src="img/caro-2.svg" alt="Image 2" />
     </Carousel.Item>
     <Carousel.Item>
     <img src="img/caro-3.svg" alt="Image 3" />
     </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
