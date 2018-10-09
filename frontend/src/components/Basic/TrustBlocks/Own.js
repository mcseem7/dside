import React, {Component} from 'react'
import './style.css'
import Doctor from '../../sources/images/works__logo/doctor.png'
import Barber from '../../sources/images/works__logo/barber.png'
import Coach from '../../sources/images/works__logo/coach.png'
import CarMaster from '../../sources/images/works__logo/service-master.png'
import Hero from '../../sources/images/works__logo/hero.png'
import Dside from './dside.png'
import Translate from 'translate-components'
export default class Own extends Component {
    constructor() {
        super()


    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {

        return (
            <section className="convupper-block" id="cu-own">
                {/*<hr />*/}
                <div className="cu-heading">
                    <hr />
                    <div className="text">
                      <Translate>We try to surround ourselves with people who are competent in their business.</Translate>
                    <br/>
                      <strong><Translate>Look We all have 'our own' people.</Translate></strong>
                    </div>
                </div>
                <div className="page-centered cu-wrapper">
                    <div className="cu-content">

                        <div className="own-container">
                            <div className="own-instance">
                                <img src={Doctor} />
                                <div className="own-heading doctor">
                                  <Translate>own</Translate>
                                </div>
                                <div className="own-desc ">DOCTOR</div>
                            </div>
                            <div className="own-instance">
                                <img src={Barber} />
                                <div className="own-heading barber">
                                  <Translate>own</Translate>
                                </div>
                                <div className="own-desc ">BARBER</div>
                            </div>
                            <div className="own-instance">
                                <img src={Coach} />
                                <div className="own-heading coach">
                                  <Translate>own</Translate>
                                </div>
                                <div className="own-desc">COACH</div>
                            </div>
                            <div className="own-instance">
                                <img src={CarMaster} />
                                <div className="own-heading cms">
                                  <Translate>own</Translate>
                                </div>
                                <div className="own-desc">CAR SERVICE MASTER</div>
                            </div>
                            <div className="own-instance">
                                <img src={Hero} />
                                <div className="own-heading hero">
                                  <Translate>own</Translate>
                                </div>
                                <div className="own-desc">HERO</div>
                            </div>
                        </div>


                        <div className="dside-promo">
                            <img className="dside-logo" src={Dside} />
                                <div className="text">
                                    <Translate>is your own company in the field of creation of sites,
                                    business promotion, the Internet marketing and
                                      increase of sales on sites.</Translate>
                                </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}