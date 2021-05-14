import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {withRouter} from 'react-router-dom';
//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer, faShoppingBag, faChevronCircleRight, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//css 
import '../../componentscss/showCarousel/showCarousel.css';
import '../../commoncss/font/font.css';
//js
//import '../tearWave/tearwave.js';


function ShowCarousel(props) {
  console.log(props.history.location.pathname)
  const setting = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false
  }

  useEffect(() => {
    
  }, [props.history.location.pathname])
  return (
    <Slider {...setting}>
      <div className="card-wrapper" >
        <div className="card">
          <div className="cardImage">
            <img className="cccs" src={require("../../assets/imgs/lolgoods5.jpeg").default} width="640px" height= "340px"/>
            <div className="tearContainer">
            </div>
            <div className="detailViewContainer">
              <div className="detailViewContainer__inDiv">
                </div>
              <div className="detailViewContainer__clickContainer">
                <div className="detailViewContainer__clickContaine__inDiv_saying">
                  <span>아무무와</span>
                  <span>친구하기</span>
                </div>
                <div className="detailViewContainer__clickContaine__inDiv_goDetail">
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cccs" src={require("../../assets/imgs/lolgoods4.jpeg").default} width="640px" height= "340px"/>
          </div>

          <div className="detail">
            <h2>teemo<span class="titleCharacter">yodle</span></h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={require("../../assets/imgs/logosopgg.png").default} width="640px" height= "340px"/>
          </div>
          <ul className="clickOption">
            <li><a href="#"><FontAwesomeIcon  icon={faSearchPlus} /></a></li>
          </ul>
          <div className="detail">
            <h2>teemo<span class="titleCharacter">yodle</span></h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={require("../../assets/imgs/logosopgg.png").default} width="640px" height= "340px"/>
          </div>
          <ul className="clickOption">
            <li><a href="#"><FontAwesomeIcon  icon={faSearchPlus} /></a></li>
          </ul>
          <div className="detail">
            <h2>teemo<span class="titleCharacter">yodle</span></h2>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default React.memo(withRouter(ShowCarousel))
