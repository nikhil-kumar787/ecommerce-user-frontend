import React from 'react'
import { Carousel } from 'react-bootstrap'

function SlideImages({image1,image2,image3}) {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default SlideImages
