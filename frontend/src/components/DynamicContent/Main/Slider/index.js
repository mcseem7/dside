import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'
import './slick/slick.css';
import './slick/slick-theme.css';
import {reactTranslateChangeLanguage} from "translate-components";
import Translate from 'translate-components'
import Slider from "react-slick";

 class SimpleSlider extends Component  {

    constructor(props) {
        super(props)
    }

    render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
          <Slider {...settings}>
          <div>
            <div id='slide-first' className="slide">
            <div className="slider-row">
            <h2>Effective Desgin</h2>
            <p>Creative Web Dev</p>
            </div>
            </div>
          </div>
          <div>
            <div id='slide-first' className="slide">
            <div className="slider-row">
            <h2>Progressive Web</h2>
            <p>Creative Scoring</p>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}


export default withRouter(SimpleSlider)