import React, {Fragment} from 'react';


const Home = (props) => {
  const HomePageHeroSlides = [
    {imge:"https://via.placeholder.com/1920X750"},
    {imge:"https://via.placeholder.com/1920X800"},
    {imge:"https://via.placeholder.com/1920X750"}
  ]

  const slides=HomePageHeroSlides.map((item) => {
    console.log(item);
          <img src={item.imge} alt="/dsfg" />
    })
  return (
    
    <Fragment>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
      {console.log(slides)}
      {slides}
    </div>
  </div>

    <div className="container">
      <h1>Home Works </h1>
    </div>
    </Fragment>
    )
}


export default Home;