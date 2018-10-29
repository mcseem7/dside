import React, { Component, Fragment } from "react";
import 'react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video';
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import ProjectVideo from './project__video.png'
import './index.css'
import playIcon from './playVideo.svg'
import Translate, { reactTranslateChangeLanguage } from "translate-components";
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
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
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
    const idVideo = 'eJ8SOYUkWl0'
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
                        serviceSlogan={[<Fragment><Translate>DSIDE to make the best video</Translate></Fragment>]}
                        textHeader={[<p></p>]} />
                </div>
            </div>

          <div className='view__container-wrapper'>
          <section className="view__container-videos">

            <div className="view__videos-left">
              <div className="container__case-studies">
                <div className="case-title">
                  <h3><Translate>Case Studies</Translate></h3>
                </div>
                <div className="case-description">
                  <p><Translate>It is enough to know what your video will be about and try to convey to the audience its meaning as if you were telling your friends about it. And after that you will definitely notice that your videos began to look much more often.</Translate></p>
                </div>
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

            <CaseService {...this.props} name='videos' />
            <Advantages/>
            <WeCare name="videos"/>
          <LimitedService/>
          <Own/>

        </div>
    )
  }
}

export default withDsideApi(VideoPage, '/portfolio/getPortfolioItems/Videos/')