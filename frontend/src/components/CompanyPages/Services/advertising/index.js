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
import Helmet from 'react-helmet-async'

class Advertising extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  render() {
    const idVideo = 'eJ8SOYUkWl0'
    return (
      <Fragment>
        <Helmet>
  <title>Dside Advertising</title>
</Helmet>
        <div>
          <div style={{ overflow: 'hidden' }} className='video-wrap'>
            <HeroVideo
              videoSrc={`https://www.youtube.com/embed/${idVideo}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&fs=1`}
            >
            </HeroVideo>
            <div id="vidtop-content">
              <HeaderService
            activeLanding={'main__header-advertising'}
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
                  <div className="golden superb"><Translate>We are engaged in packaging business and sale of its services</Translate></div>
                  <h3><Translate>You can just come up with an IDEA</Translate></h3>
                  <p><Translate>and get a name for the company (naming), a name for the domain, a logo,</Translate>
                    <Translate>a corporate identity, a marketing-kit, as well as a good-selling website and a customized advertising campaign.</Translate></p>
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

          <CaseService {...this.props} name='advertising' />

        </div>

        <section className="al__time-section">

          <div className="al__time-wrapper">

            <h3><Translate>Become powerful</Translate></h3>

            <p><Translate>Take the first step to the strongest and most profitable sales.
    Already advertised? Order an audit of an existing advertising campaign, we will point out the weaknesses</Translate>
              <span className="golden bolder"> <Translate>for free.</Translate></span></p>


            <div className="al__time-button">

            </div>

          </div>
        </section>
        <Iter />
        <WeCare name="advertisement" />
        <Advantages />
        <Own />
        <LimitedService />
        <Footer/>
      </Fragment>
    )
  }
}

export default withDsideApi(Advertising, '/portfolio/getPortfolioItems/Advertising/')
