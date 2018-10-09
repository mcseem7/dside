import React, { Component, Fragment } from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import LogoBrand from './images/websites-heading.png'
import Vova from './images/vova__dside.png'
import Versus from './images/Layer 123.png'
import SimpleWeb from './images/simple-web.svg'
import BetterWeb from './images/better-web.svg'
import Footer from '../../../Basic/Footer'
import './index.css'

import HeaderPost from '../../../DynamicContent/Header__Post/index';
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import PortolioPost from "../../../DynamicContent/Header__Post/Portfolio__Post";
import withDsideApi from "../../../../HOC/Fetch";
import { HeroVideo } from "react-hero-video";


 class Website extends Component {
  constructor () {
    super()
  }

  render () {
    const idVideo = 'eJ8SOYUkWl0'
    return (
      <Fragment>
        <div>

            <div style={{overflow: 'hidden'}} className='video-wrap'>
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
          <h2>What's the difference</h2>
          <div className="headers-websites-comparsion">
            <div className="comp-h-left greygoose"><span>Simple Website</span><img src={SimpleWeb} alt=""/></div>
            <div className="comp-h-mid"><span>vs</span></div>
            <div className="comp-h-right"><img src={BetterWeb} alt=""/><span><strong className="golden">Well-selling</strong>website</span></div>
          </div>
          <div className="body-websites-comparsion">
            <div className="roow"><span>100</span><strong>USERS</strong><span>100</span></div>
            <div className="roow"><span>$30</span><strong>PER CUSTOMER</strong><span>$30</span></div>
            <div className="roow"><span>5</span><strong>SALES</strong><span className="golden">10</span></div>
            <div className="roow"><span className="greygoose">-</span><strong>RESALES</strong><span className="golden">5</span></div>
            <div className="roow"><span className="greygoose">-</span><strong>FRIENDS INVITED</strong><span className="golden">3</span></div>
            <div className="roow"><span className="greygoose">-</span><strong>RETURNED</strong><span className="golden">2</span></div>
            <div className="roow greater"><span className="greygoose">$150</span><strong>TOTAL</strong><span className="greender">$600</span></div>
          </div>
          </section>
          </div>






        </div>

        <div id='case__wrapper' style={{background: '#fff'}}>
        <div className="container__case-studies">
          <div className="case-title">
            <h3>Case Studies</h3>
          </div>
          <div className="case-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.</p>
          </div>
        </div>
        <div className="case__service">
          <PortolioPost {...this.props} />
        </div>
        </div>

        <WeCare name="websites"/>
        <Advantages/>

      </Fragment>
    )
  }
}


export default withDsideApi(Website, '/portfolio/getPortfolioItems/Websites/')