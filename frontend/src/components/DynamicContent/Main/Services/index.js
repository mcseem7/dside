import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Services () {
  return (
    <section>
      <div className="content__services">
        <div className="title__service">
          <h4>Our services</h4>
        </div>
        <div className="services">

          <div className="title__service">
            <h4>Our services</h4>
          </div>

          <div className="list__services-branding">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/brand">Branding</Link></li>
              <li>Logo creation</li>
              <li>Naming</li>
              <li>Identity</li>
            </ul>
          </div>

          <div className="list__services-strategy">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/logo">Logo</Link></li>
              <li>Logo creation</li>
              <li>Naming</li>
              <li>Identity</li>
            </ul>
          </div>

          <div className="list__services-advert">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/videos">Videos</Link></li>
              <li>Logo creation</li>
              <li>Naming</li>
              <li>Identity</li>
            </ul>
          </div>

          <div className="list__services-websites">
            {/* <div className="title__list"> */}
            {/* <h2>Branding</h2> */}
            {/* </div> */}
            <ul className="list">
              <li><Link to="/services/website">Websites</Link></li>
              <li>Logo creation</li>
              <li>Naming</li>


              <li>Identity</li>
            </ul>
          </div>

        </div>

        <button className="more__about-service" >
                More services
        </button>
      </div>
    </section>
  )
}
