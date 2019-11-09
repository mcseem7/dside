import React, { Component } from 'react'
import CaseService from '../serviceComponents/CaseService/index'
import './index.css'
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import withDsideApi from "../../../../HOC/Fetch";
import Footer from '../../../Basic/Footer'
import Helmet from 'react-helmet-async'

class Design extends Component {
  constructor(props) {
    super(props)
      this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.nextgraph = this.nextgraph.bind(this);
    this.previousgraph = this.previousgraph.bind(this);
  }

next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
nextgraph() {
    this.slidergraph.slickNext();
  }
  previousgraph() {
    this.slidergraph.slickPrev();
  }
  render(){

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
    };

    const settingswebdesign = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    fade: true,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
    };

    return (

        <div>
        <Helmet>
  <title>Dside design</title>
</Helmet>

          {/*<div className='designs__quality-wraoper'>
            <section className="designs-dev__quality" id='design__developer'>
              <h2><Translate>What's the difference?</Translate></h2>
              <div className="headers-designs-comparsion">
                <div className="comp-h-left greygoose"><span><Translate>Simple design</Translate></span><img src={SimpleWeb} alt="" /></div>
                <div className="comp-h-mid"><span>vs</span></div>
                <div className="comp-h-right"><img src={BetterWeb} alt="" /><span>
                  <div className="golden_title"><span><Translate>Well-selling</Translate></span></div>

                  <Translate>design</Translate></span></div>
              </div>

              <div className="body-designs-comparsion">
                <div className="roow"><span>100</span><strong><Translate>USERS</Translate></strong><span>100</span></div>
                <div className="roow"><span>$30</span><strong><Translate>PER CUSTOMER</Translate></strong><span>$30</span></div>
                <div className="roow"><span>5</span><strong><Translate>SALES</Translate></strong><span className="golden">10</span></div>
                <div className="roow"><span className="greygoose">-</span><strong><Translate>RESALES</Translate></strong><span className="golden">5</span></div>
                <div className="roow"><span className="greygoose">-</span><strong><Translate>FRIENDS INVITED</Translate></strong><span className="golden">3</span></div>
                <div className="roow"><span className="greygoose">-</span><strong><Translate>RETURNED</Translate></strong><span className="golden">2</span></div>
                <div className="roow greater"><span className="greygoose">$150</span><strong><Translate>TOTAL</Translate></strong><span className="greender">$600</span></div>
              </div>
            </section>
          </div>*/}

        <div className="row">
               <h2 className="slider-header">Web Design</h2>


          </div>
          <div className="row">
               <h2 className="slider-header">Graphic Design</h2>


          </div>
        <CaseService {...this.props} name='design' />
        <Advantages />
        <Footer/> </div>
    )
  }
}
export default withDsideApi(Design, '/portfolio/getPortfolioItems/Design/')