import React from 'react'
import './gallery.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from 'better-react-carousel'

const gallery = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('name')) {
      navigate('/LogIn')
      return;
    }
  })
  return (
    <>
      <div className="carouselContainer">
        <Carousel rows={2} cols={2} loop autoplay={3000}>
          <Carousel.Item>
            <img src='https://cdn.flowersnfruits.com/uploads/product/flowers_n_fruits/OCT2024/1727935557936-7.webp' alt='Bouquet 1' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://cdnnew.interflora.in/f_auto,q_auto,t_pnopt19prodlp/products/p-birthday-cheers-enchanting-blooms-bouquet-268843-m.jpg' alt='Bouquet 2' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://flowerlab.in/cdn/shop/files/BlushingBlueHandBouquet_1024x1024@2x.jpg?v=1750049789' alt='Bouquet 3' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/29755898/2024/5/24/1024a018-083e-419c-8b21-e30099ebf45c1716541112920AssortedGifts2.jpg' alt='Bouquet 4' height='325px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://pariscornerindia.com/cdn/shop/files/IMG-20200616-WA0101-1_1800x1800_67e69655-6c73-433f-8f05-7e1f0afa3756.jpg?v=1707891463' alt='Perfume 1' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.frenchessence.com/cdn/shop/files/30ML-CHARM-2.jpg?v=1758783530' alt='Perfume 2' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://m.media-amazon.com/images/I/71oKYkbMSBL._AC_UF1000,1000_QL80_.jpg' alt='Perfume 3' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.lancome.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-lancome-in-ng-Library/en_IN/dw94566d7b/images/beauty-magazine/perfume-guides/Lanc%C3%B4mes-Luxury-Perfumes-for-Women.jpg?sw=500&sh=500&sm=cut&q=70' alt='Perfume 4' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqp8ZOMGeoX10qfnV46pna7Wh49weG8JN1gQ&s' alt='Candle 1' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.amaraafragrances.in/cdn/shop/files/PHOTO-2023-12-15-15-22-28.jpg?v=1704484121' alt='Candle 2' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://tohgarden.com/wp-content/uploads/2021/08/Glass-Jar-Preserved-Flower-Aromatherapy-Luxury-Fragrance-Scented-Candle-2.png' alt='Candle 3' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://cdn.sanity.io/images/kie4hq77/development/de10c3b7a8ce2ac9f69a4979ac5e5751f37561ae-1000x1142.png?auto=format&q=75&w=800' alt='Candle 4' height='325px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://pariscornerindia.com/cdn/shop/files/IMG-20200616-WA0101-1_1800x1800_67e69655-6c73-433f-8f05-7e1f0afa3756.jpg?v=1707891463' alt='Perfume 1' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.frenchessence.com/cdn/shop/files/30ML-CHARM-2.jpg?v=1758783530' alt='Perfume 2' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://m.media-amazon.com/images/I/71oKYkbMSBL._AC_UF1000,1000_QL80_.jpg' alt='Perfume 3' height='300px' width='300px' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://www.lancome.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-lancome-in-ng-Library/en_IN/dw94566d7b/images/beauty-magazine/perfume-guides/Lanc%C3%B4mes-Luxury-Perfumes-for-Women.jpg?sw=500&sh=500&sm=cut&q=70' alt='Perfume 4' height='300px' width='300px' />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default gallery