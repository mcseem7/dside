import React, { Component } from 'react'
import Logotype from '../../../sources/images/Logo.svg'
import Shiny from '../../../sources/images/works__logo/shiny.svg'
import Palm from '../../../sources/images/works__logo/palm.svg'
import Wallet from '../../../sources/images/works__logo/wallet.svg'
import './index.css'
import {Link} from 'react-router-dom'

export default class About extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="container__about-content">

        <div className="question__wrapper">
          <p className="question">What?</p>
        </div>

        <div className="about__company-content">
          <div className="about__content">

            <p className="company__content">
              <div className="logotype">
                <img src={Logotype} alt="" />
              </div> is a value driven, focused and very ambitious digital agency based <br /> in Warsaw,
              providing the best and innovative solutions for your business.
            </p>
          </div>

          <div className="more__about-button">
            <Link to="/aboutus">
            <button className="more__about shining-underline">
                  More about us
              <span></span>
            </button>
            </Link>
          </div>
        </div>
        <div className="advantages"><span><img src={Shiny} alt="" />Brightly.</span><span> <img src={Palm} alt="" />Easy.</span> <span><img src={Wallet} alt="" />Profitable.</span></div>
      </div>
    )
  }
}
