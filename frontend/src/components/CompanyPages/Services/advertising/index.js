import React, { Component, Fragment } from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import LogoBrand from './images/hand.png'
import Shiny from '../../../sources/images/works__logo/shiny.svg'
import Palm from '../../../sources/images/works__logo/palm.svg'
import Wallet from '../../../sources/images/works__logo/wallet.svg'
import Footer from '../../../Basic/Footer'
import './index.css'

import HeaderPost from '../../../DynamicContent/Header__Post/index';
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Iter from "../../../Basic/TrustBlocks/iter";
import Own from "../../../Basic/TrustBlocks/Own";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import PortolioPost from "../../../DynamicContent/Header__Post/Portfolio__Post";
import withDsideApi from "../../../../HOC/Fetch";
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from 'translate-components'
import { HeroVideo } from "react-hero-video";

 class Advertising extends Component {
  constructor () {
    super()
  }
  componentDidMount() {
    window.scrollTo(0,0)
  }

  render () {
    const idVideo = 'uaGotppPsCs'
    return (
      <Fragment>
        <div>
            <div style={{overflow: 'hidden'}} className='video-wrap'>
              <HeroVideo
                videoSrc={`https://www.youtube.com/embed/${idVideo}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&fs=1`}
              >
              </HeroVideo>
                <div id="vidtop-content">
                    <HeaderService
                        logoHeader={LogoBrand}
                        stylelogotext={'logo__service-text_advertising'}
                        serviceSlogan={'DSIDE to make your business earn more MONEY'}
                        imgLogoPosition={'logo__service-img-ads'}
                        textContainer={'dside_textContainer-advertising'}
                        // textHeader={[<p>Webstes</p>, <p>That sell</p>, <p>your</p>, <p>goods</p>]}
                    />
                </div>

            </div>

          <div className="developers__quality-wrapper">
          <section className="developers__quality">

            <div className="developer__left-content">

              <div className="contentby__ads">
              <div className="golden superb">We are engaged in packaging business and sale of its services</div>
              <h3>You can just come up with an IDEA</h3>
              <p> and get a name for the company (naming), a name for the domain, a logo, a corporate identity, a marketing-kit, as well as a good-selling website and a customized advertising campaign.</p>
              </div>


            </div>
            <div className="advantages"><span><
              img src={Shiny} alt="" /><Translate>Brightly.</Translate></span>
              <span> <img src={Palm} alt="" /><Translate>Easy.</Translate></span> <span>
                  <img src={Wallet} alt="" /><Translate>Profitable.</Translate></span></div>
            <div className="developer__right-content">

            </div>


          </section>
          </div>

          <section className="al__time-section">

            <div className="al__time-wrapper">

              <h3>Become powerful</h3>

              <p>Take the first step to the strongest and most profitable sales. Already advertised? Order an audit of an existing advertising campaign, we will point out the weaknesses <span className="golden bolder">for free.</span></p>


              <div className="al__time-button">

              </div>

            </div>
          </section>
        </div>
        <div id='case__wrapper' style={{background: '#fff'}}>
        <div className="container__case-studies">
          <div className="case-title">
            <h3>Case Studies</h3>
          </div>
          <div className="case-description">
            <p>Evaluate our previous experience in advertising. Each case in our portfolio perfectly shows the way we work.</p>
          </div>
        </div>
        <div className="case__service">
          <PortolioPost {...this.props} />
        </div>
        </div>
        <Iter/>
        <WeCare name="websites"/>
        <Advantages/>
        <Own/>
        <LimitedService/>
      </Fragment>
    )
  }
}

export default withDsideApi(Advertising, '/portfolio/getPortfolioItems/Advertising/')
