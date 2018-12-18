import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'
import {reactTranslateChangeLanguage} from "translate-components";
import Translate from 'translate-components'

 class  Services extends Component  {

    constructor(props) {
        super(props)
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
                            <Link to={`${this.props.match.url}/services/brand`} className="listened">
                            <div className="list__services-branding listed">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <div className="list">
                                    <h2>Branding</h2>
                                    <p>Brand legend, Brandbook, Identity</p>
                                </div>
                            </div>
                            </Link>
                            <Link to={`${this.props.match.url}/services/website`} className="listened">
                            <div className="list__services-websites listed">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                               <div className="list">
                                    <h2>Websites</h2>
                                    <p>Landing page, E-commerce</p>
                                </div>
                            </div>
                            </Link>
                            <Link to={`${this.props.match.url}/services/advertising`} className="listened">
                            <div className="list__services-advert listed">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <div className="list">
                                    <h2>Advertising</h2>
                                    <p>E-mail marketing, CPA marketing, Social media, Direct</p>
                                </div>
                            </div>
                            </Link>
                            <Link to={`${this.props.match.url}/services/automation`} className="listened">
                            <div className="list__services-automation listed">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <div className="list">
                                    <h2>Automation</h2>
                                    <p>Increasing efficency of your business</p>
                                </div>
                            </div>
                            </Link>
                            <Link to={`${this.props.match.url}/services/automation`} className="listened">
                            <div className="list__services-video listed">
                                {/* <div className="title__list"> */}
                                {/* <h2>Branding</h2> */}
                                {/* </div> */}
                                <div className="list">
                                    <h2>Videos</h2>
                                    <p>Motion graphics, Filming</p>
                                </div>
                            </div>
                            </Link>
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


export default withRouter(Services)