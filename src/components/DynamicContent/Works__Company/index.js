import React, {Component} from 'react'
import './index.css'
import Adshara from './adshara.svg'
import Citron from './citron.svg'
import ColorFest from './colorfest.svg'
import nau from './nau.svg'
import NewChannel from './newchannel.svg'
import NewDoc from './newdoc.svg'
import Polismart from './polismart.svg'

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
