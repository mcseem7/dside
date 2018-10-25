import React, { Component, Fragment } from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import LogoBrand from './images/Layer 120.png'
import Vova from './images/vova__dside.png'
import Versus from './images/Layer 123.png'
import BakerAndrew from './images/baker__andrew.svg'
import Footer from '../../../Basic/Footer'
import './index.css'

import HeaderPost from '../../../DynamicContent/Header__Post/index';
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import PortolioPost from "../../../DynamicContent/Header__Post/Portfolio__Post";
import withDsideApi from "../../../../HOC/Fetch";
import { HeroVideo } from "react-hero-video";
import { reactTranslateChangeLanguage } from "translate-components";
import Translate from 'translate-components'

 class Automation extends Component {
  constructor () {
    super()
  }
  componentDidMount() {
    window.scrollTo(0,0)
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  render () {
    const idVideo = 'eJ8SOYUkWl0'
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
                        stylelogotext={'logo__service-text_automation'}
                        serviceSlogan={'DSIDE to make your business earn more MONEY'}
                        imgLogoPosition={'logo__service-img-auto'}
                        textContainer={'dside_textContainer-automation'}
                        // textHeader={[<p>Webstes</p>, <p>That sell</p>, <p>your</p>, <p>goods</p>]}
                    />
                </div>

            </div>


<div className='automation__quality-wrapper'>
          <section className="automation__quality">


 

<div className="developer__left-content">

  <div className="contentby__vova">
  <h3><Translate>Quality implemented  website</Translate></h3>
  <p><Translate>is the key to a successful and scalable business</Translate></p>
  </div>

  <div className="titles__developer">
    <p className="name__developer"><Translate>Volodymyr Piskun</Translate></p>
    <p className="position__developer"><Translate>Senior backend developer</Translate></p>
  </div>

  <div className="discover__button">
    <a href="#">
      <Translate>discover your possibilites</Translate>
    </a>
  </div>

</div>

<div className="developer__right-content">

  <div className="developer__photo">

    <img src={Vova} alt=""/>

  </div>

</div>




          </section>
</div>
          <section className="versus__section">


            <div className="versus__section-wrapper">

              <div className="content__section-versus">

              <div className="versus__section-content">

                <h3 className="versus__title"><Translate>Let's imagine a little</Translate></h3>


                <p className="versus__text"><Translate>To the left is our Andrew, who made the site with us and successfully sells buns,
                  but to the right - John and Matthew, who got stuck in the 2000s
                  and do not automate the business,</Translate><span><Translate>what happens to them?</Translate></span></p>

              </div>


              <div className="versus__image-people">

                <img src={Versus} alt=""/>

              </div>
            </div>

            </div>
          </section>



          <section className="content__people-versus">

            <div className="about__people-wrapper">

              <div className="about__andrew-baker">

                <div className="about__bakers-title">

                  <div className="andrew__log-img">
                    <img src={BakerAndrew} alt=""/>
                  </div>

                  <div className="baker__titles">
                    <h3><Translate>andrew</Translate></h3>
                    <p>24 Y.O <Translate>BAKER</Translate></p>
                  </div>
                </div>

                <div className="about__list-andrew">
                  <ul className="features__bakers">
                    <li><Translate>His customers do not wait in line, because
                      he has the applications and the bakery can be ordered
                      before you come to the bakery</Translate></li>
                    <li>
                     <Translate>Accounting, what is in his warehouse is automatically maintained</Translate>
                    </li>
                    <li>
                      <Translate>He always has fresh products,
                      because the system itself
                      warns him about the timing of implementation</Translate>
                    </li>
                  </ul>
                </div>

              </div>


              <div className="about__matthew-baker">
                <div className="about__bakers-title">

                  <div className="matthew__log-img">
                    <img src={BakerAndrew} alt=""/>
                  </div>

                  <div className="baker__titles">
                    <h3><Translate>JOHN & MATTHEW</Translate></h3>
                    <p>24, 27 Y.O <Translate>BAKERS</Translate></p>
  
                  </div>
                </div>

                <div className="about__list-matthew">
                  <ul className="features__bakers">
                    <li><Translate>Their customers stand in line, thereby closing the influx of new ones that are rushing</Translate></li>
                    <li>
                      <Translate>the guys had to hire a warehouseman, because they need not only to bake buns, but also to develop their business. Even though their two</Translate>
                    </li>
                    <li>
                      <Translate>the risk increases that spoiled food will fall into food and even regular customers will be lost</Translate>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </section>


          <section className="al__time-section">

            <div className="al__time-wrapper">

              
              <h3><Translate>Become powerful</Translate></h3>

              <p><Translate>Take the first step to the strongest and most profitable sales.</Translate><br/>
              <Translate>Already doing your business automation?</Translate> 
              <br/>
               <Translate>Order an audit of an existing automation campaign, we will point out the weaknesses</Translate>
                <span className="golden bolder"> <Translate>for free.</Translate></span></p>

              <div className="al__time-button">

              </div>

            </div>
          </section>
        </div>
        <CaseService {...this.props} name='automation' />
        <WeCare name="automation"/>
        <Advantages/>
        <LimitedService/>

      </Fragment>
    )
  }
}

export default withDsideApi(Automation, '/portfolio/getPortfolioItems/Automation/')