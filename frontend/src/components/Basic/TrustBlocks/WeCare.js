import React, {Component} from 'react'
import './style.css'
import Translate from 'translate-components'
export default class WeCare extends Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        return (
            <section className="convupper-block" id="cu-we-care">
                <div className="page-centered cu-wrapper">
                    <div className="cu-content" id="care">
                    {
                     this.props.name == 'website' ? 
                     <h3><Translate>Why website from DSIDE's</Translate>
                      <br/>
                     <Translate>sell better</Translate></h3>  : 
                     <h3><Translate>Why do DSIDE's</Translate> <Translate>{this.props.name}</Translate>
                     <br/>
                     <Translate>sell better</Translate></h3> 
                    }  
                        <hr/>
                        {/* TODO: Inject LP name instead of *LP NAME **/}

                        <div className="text">
                            <p>
                              <Translate>Our slogan - we do care.</Translate><br/>
                                <Translate>When we receive an order for the development or advertisement of a calculator of an
                                  insurance company, we study what is retrocedent and reinsurance,</Translate>, <Translate>delving into the heart
                              of  the matter. To talk with clients of our customer in one language.</Translate>
                            </p>
                            <p>
                              <Translate>At the same time, the customer's participation is minimal.</Translate> <br/>
                              <Translate>Imagine if the doctor asked the client: 'Show me how you want me to treat your tooth?'</Translate>
                            </p>
                            <p>
                              - <Translate>Man, damn, I just want it not to hurt. Do it.</Translate>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}