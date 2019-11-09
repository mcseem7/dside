import React, { Component, Fragment } from 'react'
import CaseService from '../serviceComponents/CaseService/index'
import './index.css'
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import withDsideApi from "../../../../HOC/Fetch";
import { reactTranslateChangeLanguage } from "translate-components";
import Footer from '../../../Basic/Footer'
import Helmet from 'react-helmet-async'

class Website extends Component {

  componentDidMount() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
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
  <title>Dside Website</title>
</Helmet>

          {/*<div className='websites__quality-wraoper'>
            <section className="websites-dev__quality" id='website__developer'>
              <h2><Translate>What's the difference?</Translate></h2>
              <div className="headers-websites-comparsion">
                <div className="comp-h-left greygoose"><span><Translate>Simple Website</Translate></span><img src={SimpleWeb} alt="" /></div>
                <div className="comp-h-mid"><span>vs</span></div>
                <div className="comp-h-right"><img src={BetterWeb} alt="" /><span>
                  <div className="golden_title"><span><Translate>Well-selling</Translate></span></div>

                  <Translate>website</Translate></span></div>
              </div>

              <div className="body-websites-comparsion">
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

        <CaseService {...this.props} name='web sites' />
        <Advantages />
        <Footer/>
      </Fragment>
    )
  }
}
export default withDsideApi(Website, '/portfolio/getPortfolioItems/Websites/')