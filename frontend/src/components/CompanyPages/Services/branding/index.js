import React, {Component, Fragment} from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import LogoBrand from './logo_brand.png'
import Footer from '../../../Basic/Footer'
import './index.css'
import louis from './lois_viton.png'
import arrow from './arrow.png'
import YoutubeBackground from 'react-youtube-background'
import HeaderPost from '../../../DynamicContent/Header__Post/index';
import withScrollReveal from 'react-scrollreveal';
import WheelReact from 'wheel-react';
import louisbag from './louisbag.png'
import shadow from './shadow.png'
import shadowLouis from './louisbag_shadow.png'
import firstCola from './brandImg/two_cola.png'
import twoCola from './brandImg/firstCola.png'
import thirdCola from './brandImg/color__three.png'
import linear from './brandImg/Layer 113.png'
import OrderButton from '../serviceComponents/OrderButton';
import Poppup from '../../../../HOC/Poppup/index';
import iconLouis from './brandImg/lois-icon.png'
import fadeBag from './brandImg/Layer_108.png'
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import Own from "../../../Basic/TrustBlocks/Own";

 class BrandPage extends Component {
  constructor() {
    super()


    this.state = {
      findActive: false,
      louisbag: false,
      modalActive: false,
      textlouisbag: false
    }

    WheelReact.config({
      up: () => {
        this.setState({louisbag: true})
      },
      down: () => {
        this.setState({louisbag: false})
      }
    })

  }


  componentDidMount() {
    window.scrollTo(0,0)
  }



  findOut = () => {
    this.setState({findActive: !this.state.findActive})
  }

   changePoppup = () => {
     this.setState({modalActive: !this.state.modalActive}, () => {
       console.log(this.state.modalActive)
     })
   }



  render() {
    const { animationContainerReference } = this.props;
    WheelReact.config({
      up: () => {
        this.setState({louisbag: true})
        setTimeout(() => {
            this.setState({louisbagtext: true})
        },400)
      },
      down: () => {
          this.setState({louisbag: false})
          this.setState({louisbagtext: false})
      }
    })
    return(
        <div>
          <YoutubeBackground videoId="eJ8SOYUkWl0">
          <HeaderService
              stylelogotext={'logo__service-text_brand'}
              logoHeader={LogoBrand}
              textHeader={[<p> Branding</p>, <p>That takes</p>, <p> Business</p>, <p>Further</p>]}
              imgLogoPosition={'logo__service-img_brand'}
              textContainer={'dside_textContainer-brand'}
              serviceSlogan={'DSIDE to make your brand work BETTER'}
              serviceCategory={'Branding'}
          />
          </YoutubeBackground>

            {
              <div
                  className="branding__service-case_studies " onScrollCapture={this.scrollCheck} {...WheelReact.events}>

                <div className="branding__service-left">

                  <div className="louis__img-container">

                    <div className="shadow__louis">
                      <div className="shadow__louis__wrapper">
                      {this.state.louisbag ?
                          <Fragment>
                            <img src={louis} className={`louis__bag-img louis__bag-animate`} alt=""/>
                          </Fragment>
                          :
                          <Fragment>
                          <img src={louis} className={`louis__bag-img `}  alt=""/>
                          </Fragment>
                      }
                      <div className="effect_animate-louisicon">
                            <img src={iconLouis} className={`louis-icon ${this.state.louisbagtext ? 'louis-icon_fade' : '' }`} alt=""/>
                      </div>
                      <div className="effect_animate-fadeBlock">
                        <img src={fadeBag} className={`louis-icon ${this.state.louisbagtext ? 'louis-icon_fade' : '' }`} alt=""/>
                      </div>

                      </div>
                    <div className="arrow__louis-container">
                      <img src={arrow} className="louis__arrow-img" alt=""/>
                    </div>
                  </div>

                  <div className={'shadow__wrapper'}>
                    <img className={`shadowImg__wrapper ${this.state.louisbag ? 'shadow__animate' : 'shadow__animate-return'}`} src={shadowLouis} alt=""/>
                  </div>

                  </div>


                </div>


                <div className="branding__service-right">

                  <div className="price__louis_wrapper">



                    {this.state.louisbagtext ?
                        <Fragment>
                          <span className="price__louis" style={{color: '#21201f'}}>$ </span>
                          <h1 className={`price__louis louis_bag-text animate__louis ${'price_animate'}`}> 2000</h1>
                        </Fragment>
                    :
                        <h1 className={`price__louis sample_bag-text animate__louis ${'price_animate_end'}`}>{'100 $'}</h1>
                          }

                  </div>



                  {this.state.louisbagtext ?   <p className={`title__louis animate__louis ${'price_animate'}`}>  Well-branded bag</p>
                      :
                      <p className={`title__louis animate__louis ${'price_animate_end'}`}>  Sample bag</p>
                  }





                  <p className="loius__viton_title-description">
                    On branding depends
                  </p>


                  <p className="loius__viton_description">
                    How expensive you can sell your goods or services.<br/>
                    As You know, brand-name original items from time to time are
                    even more expensive than their unnamed counterparts.
                  </p>
                  {/*<div className="service_button_down">*/}
                  {/*order now*/}
                  {/*</div>*/}
                </div> </div>
            }

          <div className={`find__out-branding ${this.state.findActive ? 'findBrand' : ''}`}>

            <div className="find__out-wrapper">
              <div className="find__container">
              <div className="diff__title">
                <p>Statistics of successful business</p>
              </div>

              <div className="find__out-title">
                <h2>What’s the difference?</h2>
              </div>

            </div>

              <div className="find__button" onClick={this.findOut}>
                find out
              </div>
            </div>


            <div className="find__cola-fade">

              <div className="cola-items__wrapper">
              <ul className="cola__items">

                <li className="cola-item">

                  <img src={firstCola} alt=""/>

                  <div className="cola-item__content">

                    <div className="cola__item-title">

                      <div className="number__cola">
                        01
                      </div>

                      <div className="cola__content">
                      <h2>coca-cola</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis</p>
                    </div>
                    </div>

                  </div>

                </li>

                <li className="cola-item cola-item_two">

                  <img src={twoCola} alt=""/>
                  <div className="cola-item__content">

                    <div className="cola__item-title">

                      <div className="number__cola">
                        02
                      </div>

                      <div className="cola__content">
                        <h2>coca-cola</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis</p>
                      </div>
                    </div>

                  </div>
                </li>

                <li className="cola-item cola-item_three">

                  <img src={thirdCola} alt=""/>
                  <div className="cola-item__content">

                    <div className="cola__item-title">

                      <div className="number__cola">
                        03
                      </div>

                      <div className="cola__content">
                        <h2>coca-cola</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis</p>
                      </div>
                    </div>

                  </div>
                </li>

              </ul>

              </div>
            </div>


            <div className="linear__fade-arrow">

              <img src={linear} alt=""/>

            </div>


            <div className="dsided__order-container">

              <h3>dsided?!</h3>

              <OrderButton handlePopup={this.changePoppup}/>


            </div>




          </div>


          {/*<CaseService/>*/}
          <div className="case__service">
          <HeaderPost/>
          </div>
          <LimitedService/>
          <Advantages/>
            <WeCare name="brandes"/>
            <Own/>
          <Footer/>
          {this.state.modalActive ? <Poppup onClose={this.changePoppup}/> :  null}
        </div>
    )
  }
}

export default withScrollReveal([

  {
    selector: '.sr-item',
    options: {
      reset: true,
      delay: 400
    },
    interval: 100
  }
])(BrandPage)