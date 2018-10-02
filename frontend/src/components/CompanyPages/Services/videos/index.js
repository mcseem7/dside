import React, { Component, Fragment } from "react";
import 'react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video';
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import ProjectVideo from './project__video.png'
import './index.css'
import playIcon from './playVideo.svg'

import HeaderPost from '../../../DynamicContent/Header__Post/index';
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import Own from "../../../Basic/TrustBlocks/Own";
import LogoBrand from "../branding/logo_brand.png";
import PortolioPost from "../../../DynamicContent/Header__Post/Portfolio__Post";
import withDsideApi from "../../../../HOC/Fetch";
import  { HeroVideo } from 'react-hero-video'
 class VideoPage extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }

  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

   openModal () {
     this.setState({isOpen: true})
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
 const idVideo = 'uaGotppPsCs'
      return(
        <div>

            <div className='video-wrap'>
              <HeroVideo
                videoSrc={`https://www.youtube.com/embed/${idVideo}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&fs=1`}
              >
              </HeroVideo>
                <div id="vidtop-content">
                    <HeaderService
                        imgLogoPosition={'logo__service-img_video'}
                        textContainer={'dside_textContainer-video'}
                        serviceSlogan={'DSIDE to make the best video'}
                        textHeader={[<p></p>]} />
                </div>
            </div>

          <div className='view__container-wrapper'>
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
          </div>

          <section className="video__background-dside">
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />

            <div className="background-image__videos">
              <img src={playIcon} alt="" onClick={this.openModal.bind(this)}/>
            </div>
          </section>

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
            <div className="case__service__wrap" >
              <div className="case__service">
                <PortolioPost {...this.props} />
              </div>
            </div>
          </div>


</div>
            <Advantages/>
            <WeCare name="videos"/>
          <LimitedService/>
          <Own/>

        </div>
    )
  }
}

export default withDsideApi(VideoPage, '/portfolio/getPortfolioItems/Videos/')