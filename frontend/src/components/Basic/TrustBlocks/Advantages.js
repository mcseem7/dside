import React, {Component} from 'react'
import './style.css'
import Eye from '../../sources/images/works__logo/eye.svg'
import Five from '../../sources/images/works__logo/five.svg'
import HQ from '../../sources/images/works__logo/high-quality.svg'
import Nimb from '../../sources/images/works__logo/nimb-saver.svg'
export default class Advantages extends Component {
    constructor() {
        super()


    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {

        return (
            <section className="convupper-block" id="cu-advantages">
                <div className="page-centered cu-wrapper">
                    <div className="cu-content">
                        <h3>Pure advantages of DSIDE</h3>
                        <div className="advantages-container">
                            <div className="advantage">
                                <img className="adv-icon" src={Eye}/>
                                <div className="advantage-heading">
                                    Accurate meeting deadlines
                                </div>
                                <div className="advantage-text">
                                    We can not miss deadlines because each employee is financially responsible
                                </div>
                            </div>

                            <div className="advantage">
                                <img className="adv-icon"  src={Five}/>
                                <div className="advantage-heading">
                                    You cam watch the process
                                </div>
                                <div className="advantage-text">
                                    You can see the progress of your project in our innovative Nimb system in detail. 24/7
                                </div>
                            </div>

                            <div className="advantage">
                                <img className="adv-icon"  src={HQ} />
                                <div className="advantage-heading">
                                    Highly experienced team
                                </div>
                                <div className="advantage-text">
                                    Five years - is minimum experience of experts who work in our team
                                </div>
                            </div>

                            <div className="advantage">
                                <img className="adv-icon"  src={Nimb}/>
                                <div className="advantage-heading">
                                    Highest quality products
                                </div>
                                <div className="advantage-text">
                                    Our customers receive more than they expected
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}