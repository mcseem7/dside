import React, { Component, Fragment } from 'react'
import CaseService from '../serviceComponents/CaseService/index'
import './index.css'
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import withDsideApi from "../../../../HOC/Fetch";
import { reactTranslateChangeLanguage } from "translate-components";
import Footer from '../../../Basic/Footer'
import Helmet from 'react-helmet-async'
import Slider from "react-slick";

class Ecommerce extends Component {

  componentDidMount() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  headerDark = (value) => {
        this.setState({ name: value })
    }

  render() {

      const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
    }

    return (
      <Fragment>
        <div>
        <Helmet>
  <title>Dside ecommerce</title>
</Helmet>
               <Slider {...settings}>
          <div>
            <div id='slide-first-ecommerce' className="slide">
            <div className="slider-row-ecommerce">
            <h2>Effective Web Production</h2>
            <p>“If your business is not on the Internet, then you are not in business!”</p>
            </div>
            </div>
          </div>
        </Slider>
          {/*<div className='ecommerces__quality-wraoper'>
            <section className="ecommerces-dev__quality" id='ecommerce__developer'>
              <h2><Translate>What's the difference?</Translate></h2>
              <div className="headers-ecommerces-comparsion">
                <div className="comp-h-left greygoose"><span><Translate>Simple ecommerce</Translate></span><img src={SimpleWeb} alt="" /></div>
                <div className="comp-h-mid"><span>vs</span></div>
                <div className="comp-h-right"><img src={BetterWeb} alt="" /><span>
                  <div className="golden_title"><span><Translate>Well-selling</Translate></span></div>

                  <Translate>ecommerce</Translate></span></div>
              </div>

              <div className="body-ecommerces-comparsion">
                <div className="roow"><span>100</span><strong><Translate>USERS</Translate></strong><span>100</span></div>
                <div className="roow"><span>$30</span><strong><Translate>PER CUSTOMER</Translate></strong><span>$30</span></div>
                <div className="roow"><span>5</span><strong><Translate>SALES</Translate></strong><span className="golden">10</span></div>
                <div className="roow"><span className="greygoose">-</span><strong><Translate>RESALES</Translate></strong><span className="golden">5</span></div>
                <div className="roow"><span className="greygoose">-</span><strong><Translate>FRIENDS INVITED</Translate></strong><span className="golden">3</span></div>
                <div className="roow"><span className="greygoose">-</span><strong><Translate>RETURNED</Translate></strong><span className="golden">2</span></div>
                <div className="roow greater"><span className="greygoose">$150</span><strong><Translate>TOTAL</Translate></strong><span className="greender">$600</span></div>
              </div>
            </section>
          </div>*/}

        </div>

        <CaseService {...this.props} name='ecommerce' />
        <Advantages />
        <Footer/>
      </Fragment>
    )
  }
}
export default withDsideApi(Ecommerce, '/portfolio/getPortfolioItems/ecommerce/')