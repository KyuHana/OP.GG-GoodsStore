import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
function IntroCarousel() {
  const setting = {
    dot: true,
    infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
  }
  return (
    <Slider {...setting}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={require('../../assets/img/opgglogo1.jpeg')} width="400px" height="400px"/>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default IntroCarousel
