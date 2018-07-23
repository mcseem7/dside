import React, { Component } from 'react'
import './index.css'
import Solidar from '../../../sources/images/works__logo/solidarnosc.svg'
import Grad from '../../../sources/images/works__logo/stolniy.svg'
import ColorFest from '../../../sources/images/works__logo/colorfest.svg'
import Bochka from '../../../sources/images/works__logo/bochka.svg'
import adshara from '../../../sources/images/works__logo/adshara.svg'
import yarmak from '../../../sources/images/works__logo/yarmak.svg'
import Polismart from '../../../sources/images/works__logo/polismart.svg'
import Motorlab from '../../../sources/images/works__logo/motorlab.svg'
import Smotra from '../../../sources/images/works__logo/smotra.svg'
import nau from '../../../sources/images/works__logo/nau.svg'
import diet from '../../../sources/images/works__logo/uda.svg'
class Brand extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="brand">
        <img src={this.props.brandImg} alt="" />
      </div>
    )
  }
}

export default class Works extends Component {
  render () {
    return (
      <section className="brands__company-container">
        <div className="brands__company">
          <div className="brand__content">
            <div className="title__brand">
              <h3 className="title"> We work with brands we believe in.</h3>
            </div>

            <div className="content__brands">
              <div className="brands">

                <Brand brandImg={Solidar} />
                <Brand brandImg={Grad} />
                <Brand brandImg={ColorFest} />
                <Brand brandImg={Bochka} />

                <Brand brandImg={diet} />
                <Brand brandImg={yarmak} />
                <Brand brandImg={adshara} />
                <Brand brandImg={Motorlab} />

                <Brand brandImg={Smotra} />
                <Brand brandImg={Polismart} />
                <Brand brandImg={nau} />
                <Brand brandImg={nau} />
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}
