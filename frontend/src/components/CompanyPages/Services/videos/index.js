import React, { Component, Fragment } from "react";
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
import LogoBrand from "../branding/logo_brand.png";
import PortolioPost from "../../../DynamicContent/Header__Post/Portfolio__Post";
import withDsideApi from "../../../../HOC/Fetch";

 class VideoPage extends Component {
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

            <div>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe
                            src="https://www.youtube.com/embed/2MpUj-Aua48?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
                            width="560" height="315" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <div id="vidtop-content">
                    <HeaderService
                        imgLogoPosition={'logo__service-img_video'}
                        textContainer={'dside_textContainer-video'}
                        serviceSlogan={'DSIDE to make the best video'}
                        textHeader={[<p></p>]} />
                </div>
            </div>

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

            <Advantages/>
            <WeCare name="videos"/>
            <Own/>
            <LimitedService/>

        </div>
    )
  }
}

export default withDsideApi(VideoPage, '/portfolio/getPortfolioItems/Videos/')