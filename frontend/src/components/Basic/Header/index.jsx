import React, { Component } from 'react'
import './index.css'
import GridIcon from './grid_img.svg'
import PlusIcon from './plus.svg'
import Logo from './Logo.svg'
import {Link} from 'react-router-dom'
import Poppup from '../../../HOC/Poppup/index';

export default class Header extends Component {
  constructor () {
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

  render () {
    return (
        <div className="header__container">
      <header className="basic__header">
        <div className="basic__header-content">
          <div className="header__content">

            <div className="left__content-icons">
              <div className="check__work-sockets">
                <div className="check__work" onClick={this.showMenu}>
                  <img src={GridIcon} width="15"/>
                </div>
              </div>

              <div className="add__work_wrapper">

                <div className="add__work">
                  <img src={PlusIcon} onClick={this.changePoppup} className="add__work_plus" alt="" width="14"/>
                </div>
              </div>
            </div>

            <div className="mid__content-logo">
              <div className="logo__container">
                <div className="logo">
                  <Link to="/dside" className="link link--dside"><span><img src={Logo} alt="" width="90" /></span></Link>
                </div>
              </div>
            </div>

            <div className="right__content-socials">
              <div className="social__icons">
                <a href='http://behance.com' className="social__icon-behance">
                </a>

                <a href='http://instagram.com' className="social__icon-instagram">
                </a>
              </div>

              <div className="check__work-sockets">
                <div className="check__work" onClick={this.showMenu}>
                  <img src={GridIcon} alt="" width="15"/>
                </div>
              </div>

            </div>

          </div>
        </div>
      </header>

          <div className="main__header" style={{display: this.state.display, opacity: this.state.opacity, transition: '0.3s'}}>
            <div className="main__header-content">
            <div className="main__header-left">

              <div className="menu__header-column">
                <div className="menu__header-item">
                  <div className="description__menu-title">
                    <Link to="/dside/aboutus"   className="link__menu">About Us</Link>
                    <p>Caption text under about us</p>
                  </div>
                </div>

                <div className="menu__header-item">
                  <div className="menu__header-title">
                    <Link to="/services/contactus"  className="link__menu">Contact Us</Link>
                  </div>
                  <div className="description__menu-title">
                    <p>Caption text under about us</p>
                  </div>
                </div>
              </div>


              <div className="menu__header-column">
                <div className="menu__header-item">
                  <div className="menu__header-title">
                    <Link to="/dside/blog"  className="link__menu">Blog</Link>
                  </div>
                  <div className="description__menu-title">
                    <p>Caption text under about us</p>
                  </div>
                </div>

                <div className="menu__header-item">
                  <div className="menu__header-title">
                    <Link to="/dside"  className="link__menu">Home</Link>
                  </div>
                  <div className="description__menu-title">
                    <p>Caption text under about us</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="main__header-right">

            </div>
            </div>
          </div>
          {this.state.modalActive ? <Poppup onClose={this.changePoppup} /> :  null}
        </div>
    )
  }
}
