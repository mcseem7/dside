import React, {Component} from 'react'
import './style.css'
export default class WeCare extends Component {
    constructor() {
        super()


    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {

        return (
            <section className="convupper-block" id="cu-we-care">
                <div className="page-centered cu-wrapper">
                    <div className="cu-content" id="care">
                        <h3>Why do DSIDE's {this.props.name} sell better</h3>
                        <hr/>
                        {/* TODO: Inject LP name instead of *LP NAME **/}

                        <div className="text">
                            <p>
                                Our slogan - we do care.<br/>
                                When we receive an order for the development or advertisement of a calculator of an
                                insurance company, we study what is retrocedent and reinsurance, delving into the heart
                                of
                                the matter. To talk with clients of our customer in one language.
                            </p>
                            <p>
                                At the same time, the customer's participation is minimal. <br/>
                                Imagine if the doctor asked the client: "Show me how you want me to treat your tooth?"
                            </p>
                            <p>
                                - Man, damn, I just want it not to hurt. Do it.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}