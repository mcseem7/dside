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
import apply from '../../../sources/images/works__logo/applu.svg'
import Poppup from '../../../../HOC/Poppup/index';
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from 'translate-components'


class Brand extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={`brand ${this.props.name != '' ? this.props.name : ''}`} >
        <img src={this.props.brandImg} alt="" />
      </div>
    )
  }
}

export default class Works extends Component {

  constructor(props) {
    super(props)

    this.state = {
      modalActive: false
    }
  }


  changePoppup = () => {
    this.setState({modalActive: !this.state.modalActive})
  }

  render () {
    return (
      <section className="brands__company-container">
        <div className="brands__company">
          <div className="brand__content">
            <div className="title__brand">
                <h3 className="title"><Translate>We work with brands we believe in.</Translate></h3>
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
                <div className={`brand applyyour`}  onClick={this.changePoppup} >
                  <img src={apply} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
        {this.state.modalActive ? <Poppup onClose={this.changePoppup} /> :  null}
      </section>
    )
  }
}
