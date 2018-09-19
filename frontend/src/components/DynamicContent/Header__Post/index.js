import React, { Component,Fragment } from 'react'
import PortfolioPost from './Portfolio__Post'
import FirstImage from './images/four__image.png'
import SecondImage from './images/thumbs-02.jpg'
import ThirdImage from './images/thumbs-03.jpg'
import FourImage from './images/thumbs-04.jpg'
import FiveImage from './images/thumbs-05.jpg'
import SixImage from './images/case_3_d.jpg'
import './index.css'
import iconGrid from './images/icon__grid.svg'
// import zindex from './images/Header_zIndex.png'
import About from './../Main/About__block/index'
import withDsideApi from './../../../HOC/Fetch'
import PortolioPost from './Portfolio__Post'

 class HeaderPost extends Component {
  constructor (props) {
    super(props)

      this.state = {
        lang: ''
      }
  }


     componentDidMount() {
         this.setState({lang: localStorage.getItem('lang')})
     }


  render () {
    console.log(this.props.dataLang)
    return (
        <div>
      <section className="portfolio__posts">
        <div className="relative__content">

          <div className="content__posts">
              {this.props.loading ?  <PortolioPost lang={this.state.lang} {...this.props} /> :  null}


          </div>


          <div className="container__what" >
        </div>

        </div>
      </section>

          <div className="what__about-content">
            <div className="block__load__more" >



              <div className="load__more">
                <div className="more__icon">
                  <img src={iconGrid} alt="" />
                </div>

                <button className="load">
                  load more
                </button>
              </div>
            </div>

          <About />



          </div>


        </div>
    )
  }
}

export default withDsideApi(HeaderPost, '/portfolio/getHomePortfolioItems/', '/en')