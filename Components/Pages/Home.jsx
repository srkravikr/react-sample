import React, {Fragment} from 'react';
import {Carousel} from 'react-bootstrap';


const Home = (props) => {
  const HomePageHeroSlides = [
    {img:"https://via.placeholder.com/1920X750"},
    {img:"https://via.placeholder.com/1920X800"},
    {img:"https://via.placeholder.com/1920X750"}
  ]

  const slides=HomePageHeroSlides.map((item, index) => {
      return(

        <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.img}
          alt="First slide"
        />
      </Carousel.Item>
      )
    });
  return (
    
    <Fragment>
    
      <div className="container">
        <Carousel>
          {slides}
        </Carousel>
      </div>
    </Fragment>
    )
}


export default Home;