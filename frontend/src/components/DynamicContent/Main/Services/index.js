import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {reactTranslateChangeLanguage} from "translate-components";
import Translate from 'translate-components'

export default class  Services extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            lang: ''
        }
    }



    render() {
        return (
            <section>
                <div className="content__services">
                    <div className="services">

                        <div className="title__service">
                            <h4 className="golden"><Translate>What can you get?</Translate></h4>
                            <h2><Translate>You can just come up with an IDEA</Translate></h2><p><Translate>and get a name for the company (naming), a
                            name for the domain, a logo, a corporate identity, a marketing-kit, as well as a
                            good-selling website and a customized advertising campaign.</Translate></p>
                        </div>
                        <div className="listwrapper">
                            <div className="list__services-branding">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <ul className="list">
                                    <li><Link to={`${this.props.match.path}/services/brand`}
                                              className="shining-underline"><Translate>Branding</Translate><span></span></Link></li>
                                    <li><Translate>Brand legend</Translate></li>
                                    <li><Translate>Brandbook</Translate></li>
                                    <li><Translate>Identity</Translate></li>
                                    <li><Translate>Naming</Translate></li>
                                </ul>
                            </div>

                            <div className="list__services-websites">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <ul className="list">
                                    <li><Link to={`${this.props.match.path}/services/website`}
                                              className="shining-underline"><Translate>Websites</Translate><span></span></Link></li>
                                  <li><Translate>Landing page</Translate></li>
                                  <li><Translate>E-commerce</Translate></li>
                                  <li><Translate>Corporate</Translate></li>
                                  <li><Translate>Intranet</Translate></li>
                                </ul>
                            </div>

                            <div className="list__services-advert">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <ul className="list">
                                    <li><Link to={`${this.props.match.path}/services/advertising`} className="shining-underline"><Translate>
                                      Advertising</Translate><span></span></Link>
                                    </li>
                                  <li><Translate>E-mail marketing</Translate></li>
                                  <li><Translate>CPA marketing</Translate></li>
                                  <li><Translate>Social media</Translate></li>
                                  <li><Translate>Direct</Translate></li>
                                </ul>
                            </div>
                            <div className="list__services-automation">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <ul className="list">
                                    <li><Link to={`${this.props.match.path}/services/automation`} className="shining-underline">

                                      <Translate>Automation</Translate><span></span></Link>

                                    </li>
                                  <li><Translate>Increasing efficency</Translate></li>
                                  <li><Translate>Quality improvement</Translate></li>
                                  <li><Translate>Reduction of staff</Translate></li>
                                  <li><Translate>Сost reduction</Translate></li>
                                </ul>
                            </div>
                            <div className="list__services-videos">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <ul className="list">
                                    <li><Link to={`${this.props.match.path}/services/videos`}
                                              className="shining-underline"><Translate>Videos</Translate><span></span></Link></li>
                                  <li><Translate>Motion graphics</Translate></li>
                                  <li><Translate>3D modelling</Translate></li>
                                  <li><Translate>Commercials</Translate></li>
                                  <li><Translate>Filming</Translate></li>
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
}
