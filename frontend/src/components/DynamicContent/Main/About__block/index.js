import React, { Component } from 'react'
import Logotype from '../../../sources/images/Logo.svg'
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
              providing the best and innovative solutions in the world of film <br /> making.
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
      </div>
    )
  }
}
