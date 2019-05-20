import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import './index.css'
import './slick/slick.css';
import './slick/slick-theme.css';
import Translate from 'translate-components'
import Slider from "react-slick";

 class SimpleSlider extends Component  {

    render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
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
            <h2><Translate>Effective Design</Translate></h2>
            <p><Translate>We design clear interfaces with bright design</Translate><br /><Translate> and branding for projects of any complexity</Translate></p>
            </div>
            </div>
          </div>
          <div>
            <div id={'slide-first-' + localStorage.getItem("lang")}  className="slide">
            <div className="slider-row">
            <h2><Translate>Progressive Web</Translate></h2>
            <p><Translate>Development of all types of web applications.</Translate><br /> <Translate>Single-page applications and high-load services</Translate></p>
            </div>
            </div>
          </div>
          <div>
            <div  id={'slide-third-' + localStorage.getItem("lang")} className="slide">
            <div className="slider-row">
            <h2><Translate>Ecommerce Solutions</Translate></h2>
            <p><Translate>We provide comprehensive solution to business tasks –</Translate><br /> <Translate>from developing a marketing strategy to implementing CRM</Translate></p>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}


export default withRouter(SimpleSlider)