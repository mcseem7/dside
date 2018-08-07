import React, {Component} from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import './index.css'
import BadLogo from './bad__logo.png'
import GoodLogo from './goodlogo.png'
import logoHeader from './logo__header-service.png'
import Footer from '../../../Basic/Footer'
import YoutubeBackground from 'react-youtube-background'

export default class LogoPage extends Component {
  constructor() {
    super()


  }

  componentDidMount() {
    window.scrollTo(0,0)
  }


  render() {

    return(
        <div>
          <YoutubeBackground
          >
           <HeaderService
               textContainer={'dside_textContainer-logo'}
               logoHeader={logoHeader}
               serviceSlogan={'DSIDE to make your logo work BETTER'}
               textHeader={[<p>LOGO DES</p>, <p>IGN NOW</p>, <p> SUBWAYS</p>]} />
          </YoutubeBackground>
            <section className="logo__service-case_studies">

              <div className="container__case-studies">

              <div className="case-title">
                <h3>Case Studies</h3>
              </div>
              <div className="case-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
               </div>

                <div className="features__cases">

                  <div className="features_case-baglogo">

                    <div className="bag__logo-img_wrapper">
                      <img src={BadLogo} alt=""/>
                    </div>

                    <div className="bad__logo-description_container">

                      <div className="bad__logo-title">
                        <div className="bad__title-apple"><h3>Old</h3><h3>bad logo apple</h3></div>
                      </div>

                      <div className="bad__logo-description">
                        <ul className="bad__logo-list">
                          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</li>
                          <li> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. </li>
                        </ul>
                      </div>

                    </div>


                  </div>

                  <div className="features_case-goodlogo">

                    <div className="bag__logo-img_wrapper">
                      <img src={GoodLogo} alt=""/>
                    </div>

                    <div className="bad__logo-description_container">

                      <div className="bad__logo-title">
                        <div className="bad__title-apple"><h3>new</h3><h3>good logo apple</h3></div>
                      </div>

                      <div className="bad__logo-description">
                        <ul className="bad__logo-list">
                          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</li>
                          <li> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. </li>
                        </ul>
                      </div>

                    </div>

                  </div>


                </div>

              </div>


            </section>
            <CaseService/>
            <LimitedService/>
          <Footer/>
        </div>
    )
  }
}