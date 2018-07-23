import React, { Component } from 'react'
import './index.css'
import GridIcon from './grid_img.png'
import PlusIcon from './plus.png'
import Logo from './Logo.svg'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  constructor () {
    super()

    this.state = {
      opacity: 0,
      display: 'none'
    }
  }


  showMenu = () => {
    if(this.state.opacity ==  1) {
      this.setState({opacity: 0, display: 'none'})
    } else {
      this.setState({opacity: 1, display: 'block'})
    }
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
                  <img src={GridIcon} alt="" />
                </div>
              </div>

              <div className="add__work_wrapper">

                <div className="add__work">
                  <img src={PlusIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="mid__content-logo">
              <div className="logo__container">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
              </div>
            </div>

            <div className="right__content-socials">
              <div className="social__icons">
                <a href='#' className="social__icon-behance">
                </a>

                <a href='#' className="social__icon-instagram">
                </a>
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
                  <div className="menu__header-title">
                    <Link to="/portfolio"   className="link__menu">Portfolio</Link>
                  </div>
                  <div className="description__menu-title">
                    <Link to="/portfolioitem"   className="link__menu">PortfolioItem</Link>
                    <p>Caption text under about us</p>
                  </div>
                </div>

                <div className="menu__header-item">
                  <div className="menu__header-title">
                    <Link to="/contactus"  className="link__menu">Contact Us</Link>
                  </div>
                  <div className="description__menu-title">
                    <p>Caption text under about us</p>
                  </div>
                </div>
              </div>


              <div className="menu__header-column">
                <div className="menu__header-item">
                  <div className="menu__header-title">
                    <Link to="/blog"  className="link__menu">Blog</Link>
                  </div>
                  <div className="description__menu-title">
                    <p>Caption text under about us</p>
                  </div>
                </div>

                <div className="menu__header-item">
                  <div className="menu__header-title">
                    <Link to="/"  className="link__menu">Home</Link>
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

        </div>
    )
  }
}
