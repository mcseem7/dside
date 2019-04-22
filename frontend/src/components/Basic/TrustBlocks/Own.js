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

                        <div className="dside-promo">
                            <img className="dside-logo" src={Dside} />
                                <div className="text">
                                    <Translate>is your own company in the field of creation of sites,
                                    business promotion, the Internet marketing and
                                      increase of sales on sites.</Translate>
                                </div>

                        </div>

            </section>
        )
    }
}