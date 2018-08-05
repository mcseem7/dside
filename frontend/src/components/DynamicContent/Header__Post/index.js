import React, { Component } from 'react'
import PortfolioPost from './Portfolio__Post'
import FirstImage from './images/four__image.png'
import SecondImage from './images/thumbs-02.jpg'
import ThirdImage from './images/thumbs-03.jpg'
import FourImage from './images/thumbs-04.jpg'
import FiveImage from './images/thumbs-05.jpg'
import SixImage from './images/thumbs-06.jpg'
import './index.css'
import iconGrid from './images/icon__grid.svg'
// import zindex from './images/Header_zIndex.png'
import About from './../Main/About__block/index'

export default class HeaderPost extends Component {
  constructor () {
    super()
  }

  render () {
    return (
        <div>
      <section className="portfolio__posts">
        <div className="relative__content">

          <div className="content__posts">
            <PortfolioPost imgPost={ThirdImage} altImg="3post" />
            <PortfolioPost imgPost={FourImage} altImg="4post" />
            <PortfolioPost imgPost={FiveImage} altImg="5post" />
            <PortfolioPost imgPost={FirstImage} altImg="1post" />
            <PortfolioPost imgPost={SixImage} altImg="6post" />
            <PortfolioPost imgPost={SecondImage} altImg="2post" />
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

          <About/>



          </div>


        </div>
    )
  }
}
