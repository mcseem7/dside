import React, {Component, Fragment} from 'react'
import './index.css'
import withDsideApi from './../../../../../HOC/Fetch'

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





            </div>

          </section>
        </Fragment>
    )

}

export default withDsideApi(CaseService, '/portfolio/getPortfolioItems/', '/ru')