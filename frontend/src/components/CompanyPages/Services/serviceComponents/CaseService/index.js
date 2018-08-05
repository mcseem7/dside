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
              <p>We already had experience in the development of the following solutions in the subject of branding. <br />Enjoy our following works:</p>
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