import React, { Component, Fragment } from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import LogoBrand from './logo_brand.png'
import Footer from '../../../Basic/Footer'
import './index.css'
import louis from './lois_viton.png'
import arrow from './arrow.png'

import HeaderPost from '../../../DynamicContent/Header__Post/index';
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import WheelReact from 'wheel-react';
import louisbag from './louisbag.png'
import shadow from './shadow.png'
import shadowLouis from './louisbag_shadow.png'
import firstCola from './brandImg/two_cola.png'
import twoCola from './brandImg/firstCola.png'
import thirdCola from './brandImg/color__three.png'
import linear from './brandImg/Layer 113.png'
import OrderButton from '../serviceComponents/OrderButton';
import Poppup from '../../../../HOC/OrderPopup/index';
import iconLouis from './brandImg/lois-icon.png'
import fadeBag from './brandImg/Layer_108.png'
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import Own from "../../../Basic/TrustBlocks/Own";
import Iter from '../../../Basic/TrustBlocks/iter'
import logoHeader from "../logos/logo__header-service.png";
import withDsideApi from "../../../../HOC/Fetch";
import { HeroVideo } from "react-hero-video";
import Helmet from 'react-helmet-async'
import OrderPopup from '../../../../HOC/OrderPopup/index';

class BrandPage extends Component {
    constructor() {
        super()


        this.state = {
            findActive: false,
            louisbag: false,
            modalActive: false,
            textlouisbag: false,
        }

        WheelReact.config({
            up: () => {
                this.setState({ louisbag: true })
            },
            down: () => {
                this.setState({ louisbag: false })
            }
        })

    }


    componentDidMount() {
        window.scrollTo(0, 0)
        reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
    }


    findOut = () => {
        this.setState({ findActive: !this.state.findActive })
    }

    changePoppup = () => {
        this.setState({ modalActive: !this.state.modalActive })
    }



    render() {

        const { animationContainerReference } = this.props;
        WheelReact.config({
            up: () => {
                this.setState({ louisbag: true })
                setTimeout(() => {
                    this.setState({ louisbagtext: true })
                }, 400)
            },
            down: () => {
                this.setState({ louisbag: false })
                this.setState({ louisbagtext: false })
            }
        })
        const idVideo = 'eJ8SOYUkWl0'
        return (
            <div>
                
                <div className='video-wrap'>
                    <HeroVideo
                         videoSrc={`https://www.youtube.com/embed/${idVideo}?rel=0&autoplay=1&loop=1&playlist=${idVideo}&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&fs=1`}
                    ></HeroVideo>
                    <div id="vidtop-content">
                        <HeaderService
                            activeLanding={'main__header-branding'}
                            stylelogotext={'logo__service-text_brand'}
                            logoHeader={LogoBrand}
                            imgLogoPosition={'logo__service-img_brand'}
                            textContainer={'dside_textContainer-brand'}
                            serviceSlogan={[<Fragment><Translate>DSIDE to make your brand work</Translate> <br /> <Translate>BETTER</Translate></Fragment>]}
                            serviceCategory={'Branding'}
                        />

                    </div>
                </div>
                <div className='branding__service-wrapper'>
                    {
                        <div
                            className="branding__service-case_studies "
                            onScrollCapture={this.scrollCheck} {...WheelReact.events} >

                            <div className="branding__service-left">

                                <div className="louis__img-container">

                                    <div className="shadow__louis">
                                        <div className="shadow__louis__wrapper">
                                            {this.state.louisbag ?
                                                <Fragment>
                                                    <img src={louis} className={`louis__bag-img louis__bag-animate`}
                                                        alt="" />
                                                </Fragment>
                                                :
                                                <Fragment>
                                                    <img src={louis} className={`louis__bag-img `} alt="" />
                                                </Fragment>
                                            }
                                            <div className="effect_animate-louisicon">
                                                <img src={iconLouis}
                                                    className={`louis-icon ${this.state.louisbagtext ? 'louis-icon_fade' : ''}`}
                                                    alt="" />
                                            </div>
                                            <div className="effect_animate-fadeBlock">
                                                <img src={fadeBag}
                                                    className={`louis-icon ${this.state.louisbagtext ? 'louis-icon_fade' : ''}`}
                                                    alt="" />
                                            </div>

                                        </div>
                                        <div className="arrow__louis-container">
                                            <img src={arrow} className="louis__arrow-img" alt="" />
                                        </div>
                                    </div>

                                    <div className={'shadow__wrapper'}>
                                        <img
                                            className={`shadowImg__wrapper ${this.state.louisbag ? 'shadow__animate' : 'shadow__animate-return'}`}
                                            src={shadowLouis} alt="" />
                                    </div>

                                </div>


                            </div>


                            <div className="branding__service-right">

                                <div className="price__louis_wrapper">


                                    {this.state.louisbagtext ?
                                        <Fragment>

                                            <h1 className={`price__louis louis_bag-text animate__louis ${'price_animate'}`}> <span className="price__louis" style={{ color: '#21201f' }}>$ </span>2000</h1>
                                        </Fragment>
                                        :
                                        <h1 className={`price__louis sample_bag-text animate__louis ${'price_animate_end'}`}><span style={{ color: '#21201f' }}>$ </span>{'100'}</h1>
                                    }

                                </div>


                                {this.state.louisbagtext ?
                                    <p className={`title__louis animate__louis ${'price_animate'}`}><Translate>Well-branded bag</Translate></p>
                                    :
                                    <p className={`title__louis animate__louis ${'price_animate_end'}`}><Translate>Sample bag</Translate></p>
                                }


                                <p className="loius__viton_title-description">
                                    <Translate>On branding depends</Translate>
                                </p>


                                <p className="loius__viton_description">
                                    <Translate>How expensive you can sell your goods or services.</Translate><br />
                                    <Translate>As You know, brand-name original items from time to time are
                                  even more expensive than their unnamed counterparts.</Translate>
                                </p>
                                {/*<div className="service_button_down">*/}
                                {/*order now*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    }
                </div>

                <div className={`find__out-branding ${this.state.findActive ? 'findBrand' : ''}`}>

                    <div className="find__out-wrapper">
                        <div className="find__container">
                            <div className="diff__title">
                                <p><Translate>Statistics of successful business</Translate></p>
                            </div>

                            <div className="find__out-title">
                                <h2><Translate>What’s the difference?</Translate></h2>
                            </div>

                        </div>

                        <div className="find__button" onClick={this.findOut}>
                            <Translate>find out</Translate>
                        </div>
                    </div>


                    <div className="find__cola-fade">

                        <div className="cola-items__wrapper">
                            <ul className="cola__items">

                                <li className="cola-item">

                                    <img src={firstCola} alt="" />

                                    <div className="cola-item__content">

                                        <div className="cola__item-title">

                                            <div className="number__cola">
                                                01
                                            </div>

                                            <div className="cola__content">
                                                <h2><Translate>Coke</Translate></h2>
                                                <p><Translate>No logo or other identity for a global brand. But you would still know this 'simple' style. Red cans and waves are all you need to know a real Coke.</Translate></p>
                                            </div>
                                        </div>

                                    </div>

                                </li>

                                <li className="cola-item cola-item_two">

                                    <img src={twoCola} alt="" />
                                    <div className="cola-item__content">

                                        <div className="cola__item-title">

                                            <div className="number__cola">
                                                02
                                            </div>

                                            <div className="cola__content">
                                                <h2><Translate>LelessoMucho</Translate></h2>
                                                <p><Translate>First, the consumer is unlikely to remember such a long name. Secondly, the style of this jar is not remembered, it is terrible, but the children might have bought it to try.</Translate></p>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li className="cola-item cola-item_three">

                                    <img src={thirdCola} alt="" />
                                    <div className="cola-item__content">

                                        <div className="cola__item-title">

                                            <div className="number__cola">
                                                03
                                            </div>

                                            <div className="cola__content">
                                                <h2><Translate>Cola - Kola</Translate></h2>
                                                <p><Translate>Black can with a word of 4 letters. This can be remembered by the end user. This idea suggests that there may be something exclusive in the can, but at the same time, it will easily lose the real stake.</Translate></p>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>


                    <div className="linear__fade-arrow">

                        <img src={linear} alt="" />

                    </div>


                    <div className="dsided__order-container">

                        <h3>dsided?!</h3>

                        <OrderButton handlePopup={this.changePoppup} />


                    </div>


                </div>

                <CaseService {...this.props} name='brands' />
                <section className="al__time-section">

                    <div className="al__time-wrapper">


                        <h3><Translate>Become powerful</Translate></h3>

                        <p><Translate>Take the first step to the strongest and most profitable sales.</Translate><br />
                            <Translate>Already doing your business automation?</Translate>
                            <br />
                            <Translate>Order an audit of an existing automation campaign, we will point out the weaknesses</Translate>
                            <span className="golden bolder"> <Translate>for free.</Translate></span></p>

                        <div className="al__time-button">

                        </div>

                    </div>
                </section>
                <Iter/>
                <WeCare name="brandes" />
                <Advantages />
                <Own />
                <LimitedService />
                <Footer/>
                <OrderPopup modalStatus={this.state.modalActive} onClose={this.changePoppup} />
            </div>
        )
    }
}
export default withDsideApi(BrandPage, '/portfolio/getPortfolioItems/Branding/')