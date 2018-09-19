import React, {Component} from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import ProjectVideo from './project__video.png'
import './index.css'
import YouTube from 'react-youtube';
import Footer from '../../../Basic/Footer'

import HeaderPost from '../../../DynamicContent/Header__Post/index';
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import Own from "../../../Basic/TrustBlocks/Own";

export default class VideoPage extends Component {
  constructor() {
    super()


  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '500',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        color: 'white',
        modestbranding: 1,
        loop: 1
      }
    };
    return(
        <div>

          <HeaderService
              imgLogoPosition={'logo__service-img_'}
              textContainer={'dside_textContainer-video'}
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
                <img src={ProjectVideo} alt=""/>
              </div>
            </div>

          </section>


          <section className="video__background-dside">
            <YouTube
                videoId="InyLat42rBE"
                opts={opts}
                onReady={this._onReady}
            />

          </section>

          {/*<CaseService/>*/}
          <div className="case__service">
            <HeaderPost/>
          </div>
            <Advantages/>
            <WeCare name="videos"/>
            <Own/>
            <LimitedService/>

        </div>
    )
  }
}