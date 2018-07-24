import React, {Component, Fragment} from 'react'
import './index.css'
import withDsideApi from './../../../../../HOC/Fetch'
import FirstImage from '../images/four__image.png'
import SecondImage from '../images/thumbs-02.jpg'
import ThirdImage from '../images/thumbs-03.jpg'
import FourImage from '../images/thumbs-04.jpg'
import FiveImage from '../images/thumbs-05.jpg'
import SixImage from '../images/thumbs-06.jpg'
import PortfolioPost from '../Portfolio__Post'

function CaseService(props) {



    return(
        <Fragment>
          <section className="case__service">
            <div className="case-title">
              <h3>Case Studies</h3>
            </div>
            <div className="case-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>

            <div className="studies__cases">
              <div className="content__posts">
                <PortfolioPost imgPost={ThirdImage} altImg="3post" />
                <PortfolioPost imgPost={FourImage} altImg="4post" />
                <PortfolioPost imgPost={FiveImage} altImg="5post" />
                <PortfolioPost imgPost={FirstImage} altImg="1post" />
                <PortfolioPost imgPost={SixImage} altImg="6post" />
                <PortfolioPost imgPost={SecondImage} altImg="2post" />
              </div>
            </div>

          </section>
        </Fragment>
    )

}

export default withDsideApi(CaseService, '/portfolio/getPortfolioItems/', '/ru')