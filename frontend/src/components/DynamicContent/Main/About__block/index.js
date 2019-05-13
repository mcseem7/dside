import React, { Component } from 'react'
import Logotype from '../../../sources/images/Logo.svg'
import Shiny from '../../../sources/images/works__logo/shiny.svg'
import Palm from '../../../sources/images/works__logo/palm.svg'
import Wallet from '../../../sources/images/works__logo/wallet.svg'
import './index.css'
import Steve from './steven.jpg'
import {Link} from 'react-router-dom'
import Translate from 'translate-components'
import ScrollAnimation from 'react-animate-on-scroll'
import { reactTranslateChangeLanguage } from 'translate-components'


export default class About extends Component {
  constructor (props) {
    super(props)

      this.state = {
        lang: ''
      }


  }


  componentDidMount() {
      this.setState({lang: localStorage.getItem('lang') })
  }


    render () {

    return (
      <div className="container__about-content">
        <ScrollAnimation animateIn="slideInUp" >
        <div className="about__company-content">
          <div className="about__content">
            <div className="texts-about">
            <p className="company__content">
              <Translate>You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.</Translate>
            </p> <ScrollAnimation delay="100" animateIn="slideInUp" ><Translate>Steven Paul Jobs, Founder at Apple</Translate></ScrollAnimation>
</div>
          </div>
        </div>
          </ScrollAnimation>
      </div>

    )
  }
}
