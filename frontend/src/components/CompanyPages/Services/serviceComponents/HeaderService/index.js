import React, {Fragment, Component} from 'react'
import './index.css'
import GridImg from './grid__img.svg'
import LogoWhite from './LogoWhite.svg'
import PlusHover from './plus-hover.svg'

export default class HeaderService extends Component {
  constructor() {
    super()


  }


  render() {
    return(
        <Fragment>

          <div className="heading__service">
          <header className="header__service">
            <div className="header__navigation">
            <div className="left__heading">

              <div className="menu__inject-news">

                <div className="grid__service-img">
                  <img src={GridImg} alt=""/>
                </div>

              </div>
              <div className="logotype__company">

                  <div className="logo__services-white">
                    <img src={LogoWhite} alt=""/>
                  </div>

              </div>

            </div>

            <div className="right__heading">

              <nav className="dside-company__links">
                <li className="behance">
                  <a href="#" className="service__icon-behance"></a>
                </li>

                <li className="instagram">
                  <a href="#" className="service__icon-instagram"></a>
                </li>

                <li className="header-service__button-order">
                  <a href="#" className="header-button__order"><img src={PlusHover} alt=""/>order now.</a>
                </li>
              </nav>

            </div>

            </div>
              <div className={`dside__header-text_container ${this.props.textContainer}`} >
                <div className={`logo__service-text ${this.props.stylelogotext}`}>
                  {this.props.textHeader}
                </div>
                <div className={`logo__service-img ${this.props.imgLogoPosition}`}>
                  <img src={this.props.logoHeader} alt=""/>
                </div>

                <div className="logo__service_slogan">
                  {this.props.serviceSlogan}
                </div>

              </div>
          </header>
            <div className="radius__wrapper"></div>
          </div>
        </Fragment>
    )
  }
}