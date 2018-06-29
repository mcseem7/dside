import React, { Component } from 'react'
import './index.css'
import GridIcon from './grid_img.png'
import PlusIcon from './plus.png'
import Behance from './behance.png'
import Instagram from './instagram.png'
import Logo from './Logo.svg'

export default class Header extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <header className="basic__header">
        <div className="basic__header-content">
          <div className="header__content">

            <div className="left__content-icons">
              <div className="check__work-sockets">
                <div className="check__work">
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
                <div className="social__icon-behance">
                  <a href="" />
                </div>

                <div className="social__icon-instagram">
                  <a href="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    )
  }
}
