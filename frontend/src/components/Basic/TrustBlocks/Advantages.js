import React, {Component} from 'react'
import './style.css'
import Eye from '../../sources/images/works__logo/eye.svg'
import Five from '../../sources/images/works__logo/five.svg'
import HQ from '../../sources/images/works__logo/high-quality.svg'
import Nimb from '../../sources/images/works__logo/nimb-saver.svg'
import Translate from "translate-components";

export default class Advantages extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {

        return (
            <section className="convupper-block" id="cu-advantages">
                <div className="page-centered cu-wrapper">
                    <div className="cu-content">
                      <h3><Translate>Pure advantages of DSIDE</Translate></h3>
                        <div className="advantages-container">
                            <div className="advantage">
                                <img className="adv-icon" src={Nimb} alt=""/>
                                <div className="advantage-heading">
                                  <Translate>Accurate meeting deadlines</Translate>
                                </div>
                                <div className="advantage-text">
                                  <Translate>We can not miss deadlines because each employee is financially responsible</Translate>
                                </div>
                            </div>

                            <div className="advantage">
                                <img className="adv-icon"  src={Eye} alt=""/>
                                <div className="advantage-heading">
                                  <Translate>You can watch the process</Translate>
                                </div>
                                <div className="advantage-text">
                                  <Translate>You can see the progress of your project in our innovative Nimb system in detail. 24/7</Translate>
                                </div>
                            </div>

                            <div className="advantage">
                                <img className="adv-icon"  src={Five} alt=""/>
                                <div className="advantage-heading">
                                  <Translate>Highest experienced team</Translate>
                                </div>
                                <div className="advantage-text">
                                  <Translate>Five years - is minimum experience of experts who work in our team</Translate>
                                </div>
                            </div>

                            <div className="advantage">
                                <img className="adv-icon"  src={HQ} alt=""/>
                              <div className="advantage-heading"><Translate>Highest quality products</Translate>
                                </div>
                                <div className="advantage-text">
                                  <Translate>Our customers receive more than they expected!</Translate>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}