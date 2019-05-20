import React, { Component } from 'react'
import CaseService from '../serviceComponents/CaseService/index'
import './index.css'
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import withDsideApi from "../../../../HOC/Fetch";
import Footer from '../../../Basic/Footer'
import Helmet from 'react-helmet-async'
import Slider from 'react-slick'

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
            <Slider {...settings}>
          <div>
            <div  id="slide-first-design" className="slide design">
            <div className="slider-row">
            <h2>Effective Design</h2>
            <p>We design clear interfaces with bright design<br /> and branding for projects of any complexity</p>
            </div>
            </div>
          </div>
        </Slider>
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
          <Slider className="descslider" ref={c => (this.slider = c)} {...settingswebdesign}>
          <div>
            <div  id={'slide-first-webdesign-' + localStorage.getItem("lang")} className="slide design">
           <div className="flexy-content">
           <div className="button-on-slide" onClick={this.previous}></div>
          <div className="columinslide">
            <h3><span>01</span> Project</h3>
            <span>We design clear interfaces with bright design and branding for projects of any complexity
             </span>
          </div>
          <div className="button-on-slide next" onClick={this.next}>
            </div>
          </div>
            </div>
          </div>

         <div>
            <div  id={'slide-second-webdesign-' + localStorage.getItem("lang")} className="slide design">
           <div className="flexy-content">
           <div className="button-on-slide" onClick={this.previous}></div>
          <div className="columinslide">
            <h3><span>02</span> Intefaces</h3>
            <span>We design clear interfaces with bright design and branding for projects of any complexity
             </span>
          </div>
          <div className="button-on-slide next" onClick={this.next}>
            </div>
          </div>
            </div>
          </div>

        </Slider>

          </div>
          <div className="row">
               <h2 className="slider-header">Graphic Design</h2>
          <Slider className="descslider" ref={c => (this.slidergraph = c)} {...settingswebdesign}>
          <div>
            <div  id={'slide-first-webdesign-' + localStorage.getItem("lang")} className="slide design">
           <div className="flexy-content">
           <div className="button-on-slide" onClick={this.previousgraph}></div>
          <div className="columinslide">
            <h3><span>01</span> Project</h3>
            <span>We design clear interfaces with bright design and branding for projects of any complexity
             </span>
          </div>
          <div className="button-on-slide next" onClick={this.nextgraph}>
            </div>
          </div>
            </div>
          </div>

         <div>
            <div  id={'slide-second-webdesign-' + localStorage.getItem("lang")} className="slide design">
           <div className="flexy-content">
           <div className="button-on-slide" onClick={this.previousgraph}></div>
          <div className="columinslide">
            <h3><span>02</span> Intefaces</h3>
            <span>We design clear interfaces with bright design and branding for projects of any complexity
             </span>
          </div>
          <div className="button-on-slide next" onClick={this.nextgraph}>
            </div>
          </div>
            </div>
          </div>

        </Slider>

          </div>
        <CaseService {...this.props} name='design' />
        <Advantages />
        <Footer/> </div>
    )
  }
}
export default withDsideApi(Design, '/portfolio/getPortfolioItems/Design/')