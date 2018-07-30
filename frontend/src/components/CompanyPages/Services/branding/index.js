import React, {Component} from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import LogoBrand from './logo_brand.png'
import Footer from '../../../Basic/Footer'
import './index.css'
import louis from './lois_viton.png'
import arrow from './arrow.png'

export default class BrandPage extends Component {
  constructor() {
    super()


  }


  render() {

    return(
        <div>
          <HeaderService
              stylelogotext={'logo__service-text_brand'}
              logoHeader={LogoBrand}
              textHeader={[<p> Branding</p>, <p>That takes</p>, <p> Business</p>, <p>Further</p>]}
              imgLogoPosition={'logo__service-img_brand'}
              textContainer={'dside_textContainer-brand'}
              serviceSlogan={'DSIDE to make your brand work BETTER'}
          />

          <div className="branding__service-case_studies">

              <div className="branding__service-left">

                <div className="louis__img-container">

                  <img src={louis} className="louis__bag-img" alt=""/>

                  <div className="arrow__louis-container">
                  <img src={arrow} className="louis__arrow-img" alt=""/>
                  </div>
                </div>

              </div>

            <div className="branding__service-right">

              <div className="price__louis_wrapper">

              <h1 className="price__louis">$ 2000</h1>
              </div>

              <p className="title__louis">
                Louis Vuitton bag
              </p>


              <p className="loius__viton_title-description">
                On branding depends
              </p>


              <p className="loius__viton_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labaccusantium doloremque laudantium,
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              </p>
            </div>

          </div>


          <div className="find__out-branding">

            <div className="find__out-wrapper">
              <div className="find__container">
              <div className="diff__title">
                <p>Statistics of successful business</p>
              </div>

              <div className="find__out-title">
                <h2>What’s the difference?</h2>
              </div>

            </div>

              <div className="find__button">
                <a href="#">find out</a>
              </div>


            </div>



          </div>


          <CaseService/>
          <LimitedService/>
          <Footer/>
        </div>
    )
  }
}