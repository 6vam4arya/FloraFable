import React from 'react'
import {Carousel} from 'better-react-carousel'

const gallery = () => {
  return (
    <>
    <div className="carouselContainer">
      <Carousel>
        <Carousel.Item>
          <img src='https://cdn.flowersnfruits.com/uploads/product/flowers_n_fruits/OCT2024/1727935557936-7.webp' alt='Bouquet 1'/>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}

export default gallery