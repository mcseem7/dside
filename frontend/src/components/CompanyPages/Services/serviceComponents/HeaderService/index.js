import React, {Fragment, Component} from 'react'
import './index.css'
import GridImg from './grid__img.svg'
import LogoWhite from './LogoWhite.svg'
import PlusHover from './plus-hover.svg'
import OrderButton from '../OrderButton'
import {Link} from 'react-router-dom'
import Poppup from '../../../../../HOC/Poppup/index';


export default class HeaderService extends Component {
  constructor() {
    super()

    this.state = {
      opacity: 0,
      display: 'none',
      modalActive: false
    }

  }


  showMenu = () => {
    if(this.state.opacity ==  1) {
      this.setState({opacity: 0, display: 'none'})
    } else {
      this.setState({opacity: 1, display: 'block'})
    }
  }


  changePoppup = () => {
    this.setState({modalActive: !this.state.modalActive}, () => {
      console.log(this.state.modalActive)
    })
  }


  render() {
    return(
        <Fragment>

          <div className="heading__service">
          <header className="header__service">
            <div className="header__navigation">
            <div className="left__heading">

              <div className="menu__inject-news">

                <div className="grid__service-img" onClick={this.showMenu}>
                  <img src={GridImg} alt="" width="15"/>
                </div>

              </div>
              <div className="logotype__company">

                  <div className="logo__services-white">
                   <Link to="/"><img src={LogoWhite} alt="" width="90"/></Link>
                  </div>

              </div>

            </div>

              <div className="logotype__company">

                <div className="logo__services-white">
                <img src={LogoWhite} alt=""/>
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
                  <a href="#" onClick={this.changePoppup} className="header-button__order"><img src={PlusHover}  alt="" width="14"/>order now.</a>
                </li>
              </nav>

            </div>

            </div>
            <div className={'head_container_with-button'}>
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

            <OrderButton handlePopup={this.changePoppup}/>
            </div>
             {/*<div className="service_button">*/}
                  {/*order now*/}
                {/*</div>*/}

          </header>
            <div className="main__header" style={{top: '80px', display: this.state.display, opacity: this.state.opacity, transition: '0.3s'}}>
              <div className="main__header-content">
                <div className="main__header-left">

                  <div className="menu__header-column">
                    <div className="menu__header-item">
                      <div className="description__menu-title">
                        <Link to="/aboutus"   className="link__menu">About Us</Link>

                      </div>
                    </div>

                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link to="/contactus"  className="link__menu">Contact Us</Link>
                      </div>
                      <div className="description__menu-title">
                      </div>
                    </div>
                  </div>


                  <div className="menu__header-column">
                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link to="/blog"  className="link__menu">Blog</Link>
                      </div>
                      <div className="description__menu-title">

                      </div>
                    </div>

                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link to="/"  className="link__menu">Home</Link>
                      </div>
                      <div className="description__menu-title">
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main__header-right">

                </div>
              </div>
            </div>
            <div className="radius__wrapper"></div>
            {this.state.modalActive ? <Poppup onClose={this.changePoppup}/> :  null}
          </div>
        </Fragment>
    )
  }
}