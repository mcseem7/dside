import React, {Component} from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import './index.css'

export default class VideoPage extends Component {
  constructor() {
    super()


  }


  render() {

    return(
        <div>
          <HeaderService
              imgLogoPosition={'logo__service-img_'}
              textContainer={'dside_textContainer-logo'}
              serviceSlogan={'DSIDE to make the best video'}
              textHeader={[<p>Video DES</p>, <p>IGN NOW</p>, <p> SUBWAYS</p>]} />
          <section className="view__container-videos">

            <div className="view__videos-left">
              <div className="view__videos-title">
                <h3>Professional commercials</h3>
              </div>

              <div className="view__videos-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                  </p>
              </div>
            </div>
            
            
            <div className="view__videos-right">
              <div className="view__videos_img-wrapper">
                <img src="" alt=""/>
              </div>
            </div>

          </section>
          <CaseService/>
          <LimitedService/>
        </div>
    )
  }
}