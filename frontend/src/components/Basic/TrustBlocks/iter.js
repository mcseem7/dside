import React, {Component} from 'react'
import './style.css'
import Ketchup from './ketchup.jpg'

export default class Iter extends Component {
    constructor() {
        super()


    }



    render() {

        return (
            <section className="convupper-block" id="cu-we-iter">
                <div className="page-centered cu-wrapper iter">
                <div className="iterimage"><img src={Ketchup} className="ketchupp"/></div>
                    <div className="cu-content" id="iter">
                        <h3>International Expierence </h3>
                        {/* TODO: Inject LP name instead of *LP NAME **/}
                        <div className="text">
                            <p>
                                We use international practice to make our campaings and products work better for you.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}