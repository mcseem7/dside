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
            <div  id="slide-second" className="slide">
            <div className="slider-row">
            <h2>Effective Design</h2>
            <p>We design clear interfaces with bright design<br /> and branding for projects of any complexity</p>
            </div>
            </div>
          </div>
          <div>
            <div id={'slide-first-' + localStorage.getItem("lang")}  className="slide">
            <div className="slider-row">
            <h2>Progressive Web</h2>
            <p>Development of all types of web applications.<br /> Single-page applications and high-load services</p>
            </div>
            </div>
          </div>
          <div>
            <div  id={'slide-third-' + localStorage.getItem("lang")} className="slide">
            <div className="slider-row">
            <h2>Ecommerce Solutions</h2>
            <p>We provide comprehensive solution to business tasks–<br /> from developing a marketing strategy to implementing CRM</p>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}


export default withRouter(SimpleSlider)