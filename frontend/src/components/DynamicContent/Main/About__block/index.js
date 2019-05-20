import React, { Component } from 'react'
import './index.css'
import Translate from 'translate-components'
import ScrollAnimation from 'react-animate-on-scroll'


export default class About extends Component {
  constructor (props) {
    super(props)

      this.state = {
        lang: ''
      }


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
