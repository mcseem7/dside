import React, {Component} from 'react'
import './index.css'
import Adshara from '../../../sources/images/works__logo/adshara.svg'
import Citron from '../../../sources/images/works__logo/citron.svg'
import ColorFest from '../../../sources/images/works__logo/colorfest.svg'
import nau from '../../../sources/images/works__logo/nau.svg'
import NewChannel from '../../../sources/images/works__logo/newchannel.svg'
import NewDoc from '../../../sources/images/works__logo/newdoc.svg'
import Polismart from '../../../sources/images/works__logo/polismart.svg'

class Brand extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
            <div className="brand">
              <img src={this.props.brandImg} alt=""/>
            </div>
    )
  }
}


export default  class Works extends Component {
  render() {
    return(
        <section className="brands__company-container">
          <div className="brands__company">
            <div className="brand__content">
            <div className="title__brand">
              <h3 className="title"> We work with brands we believe in.</h3>
            </div>

            <div className="content__brands">
                <div className="brands">




                  <Brand brandImg={Adshara} />
                  <Brand brandImg={Citron}/>
                  <Brand brandImg={Polismart} />
                  <Brand brandImg={NewDoc} />

                  <Brand brandImg={ColorFest} />
                  <Brand brandImg={nau} />
                  <Brand brandImg={NewChannel} />
                  <Brand brandImg={Polismart}/>

                  <Brand brandImg={Adshara} />
                  <Brand brandImg={Citron}/>
                  <Brand brandImg={Polismart} />
                  <Brand brandImg={NewDoc} />
                </div>

            </div>
            </div>
          </div>
        </section>
    )
  }
}
