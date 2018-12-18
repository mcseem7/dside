import React, { Component } from 'react'
import Logotype from '../../../sources/images/Logo.svg'
import Shiny from '../../../sources/images/works__logo/shiny.svg'
import Palm from '../../../sources/images/works__logo/palm.svg'
import Wallet from '../../../sources/images/works__logo/wallet.svg'
import './index.css'
import {Link} from 'react-router-dom'
import Translate from 'translate-components'
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

        <div className="question__wrapper">
            <p className="question"><Translate>What?</Translate></p>
        </div>

        <div className="about__company-content">
          <div className="about__content">

            <p className="company__content">
              <div className="logotype">
                <img src={Logotype} alt="" />
              </div> <Translate>is an agency who can take your business further.</Translate>
            </p>
          </div>
        </div>
          <div className="advantages"><span><
              img src={Shiny} alt="" /><Translate>Brightly.</Translate></span>
              <span> <img src={Palm} alt="" /><Translate>Easy.</Translate></span> <span>
                  <img src={Wallet} alt="" /><Translate>Profitable.</Translate></span></div>
      </div>
    )
  }
}
