import React, { Component, Fragment } from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import LogoBrand from './images/websites-heading.png'
import Vova from './images/vova__dside.png'
import Versus from './images/Layer 123.png'
import SimpleWeb from './images/simple-web.svg'
import BetterWeb from './images/better-web.svg'
import './index.css'
import Own from '../../../Basic/TrustBlocks/Own'
import HeaderPost from '../../../DynamicContent/Header__Post/index';
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Iter from "../../../Basic/TrustBlocks/iter";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import PortolioPost from "../../../DynamicContent/Header__Post/Portfolio__Post";
import withDsideApi from "../../../../HOC/Fetch";
import { HeroVideo } from "react-hero-video";
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import Footer from '../../../Basic/Footer'
import Helmet from 'react-helmet-async'

class Website extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  render() {
    const idVideo = 'eJ8SOYUkWl0'
    return (
      <Fragment>
        <div>
        <Helmet>
  <title>Dside Website</title>
</Helmet>
          <div style={{ overflow: 'hidden' }} className='video-wrap'>
            <HeroVideo
              videoSrc={`https://www.youtube.com/embed/${idVideo}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&fs=1`}>
            </HeroVideo>
            <div id="vidtop-content">
              <HeaderService
                logoHeader={LogoBrand}
                stylelogotext={'logo__service-text_website'}
                serviceSlogan={'DSIDE to make your website SELL BETTER'}
                imgLogoPosition={'logo__service-img_website'}
                textContainer={'dside_textContainer-website'}
                textHeader={[<p></p>]}
              />
            </div>
          </div>
          <div className='websites__quality-wraoper'>
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
          </div>

        </div>

        <CaseService {...this.props} name='web sites' />
        <section className="al__time-section">

          <div className="al__time-wrapper">


            <h3><Translate>Become powerful</Translate></h3>

            <p><Translate>Take the first step to the strongest and most profitable sales.</Translate><br />
              <Translate>Already doing your business automation?</Translate>
              <br />
              <Translate>Order an audit of an existing automation campaign, we will point out the weaknesses</Translate>
              <span className="golden bolder"> <Translate>for free.</Translate></span></p>

            <div className="al__time-button">

            </div>

          </div>
        </section>
        <Iter/>
        <WeCare name="website" />
        <Advantages />
        <Own />
        <Footer/>
      </Fragment>
    )
  }
}


export default withDsideApi(Website, '/portfolio/getPortfolioItems/Websites/')