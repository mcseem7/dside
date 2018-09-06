import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Services () {
  return (
    <section>
      <div className="content__services">
        <div className="services">

          <div className="title__service">
            <h4 className="golden">What can you get?</h4>
            <h2>You can just come up with an IDEA</h2><p> and get a name for the company (naming), a name for the domain, a logo, a corporate identity, a marketing-kit, as well as a good-selling website and a customized advertising campaign.</p>
          </div>
<div className="listwrapper">
          <div className="list__services-branding">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/brand" className="shining-underline">Branding<span></span></Link></li>
              <li>Brand legend</li>
              <li>Brandbook</li>
              <li>Identity</li>
              <li>Naming</li>
            </ul>
          </div>

          <div className="list__services-websites">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/website" className="shining-underline">Websites<span></span></Link></li>
              <li>Landing page</li>
              <li>E-commerce</li>
              <li>Corporate</li>
              <li>Intranet</li>
            </ul>
          </div>

          <div className="list__services-advert">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/advertising" className="shining-underline">Advertising<span></span></Link></li>
              <li>E-mail marketing</li>
              <li>CPA marketing</li>
              <li>Social media</li>
              <li>Direct</li>
            </ul>
          </div>
<div className="list__services-automation">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/automation" className="shining-underline">Automation<span></span></Link></li>
              <li>Increasing efficency</li>
              <li>Quality improvement</li>
              <li>Reduction of staff</li>
              <li>Сost reduction</li>
            </ul>
          </div>
          <div className="list__services-videos">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/videos" className="shining-underline">Videos<span></span></Link></li>
              <li>Motion graphics</li>
              <li>3D modelling</li>
              <li>Commercials</li>
              <li>Filming</li>
            </ul>
          </div>

        </div>
</div>

        {/*<button className="more__about-service shining-underline" >*/}
                {/*More services*/}
          {/*<span></span>*/}
        {/*</button>*/}
      </div>
    </section>
  )
}
