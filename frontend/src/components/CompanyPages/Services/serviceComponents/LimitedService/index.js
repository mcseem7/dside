import React, {Component, Fragment} from 'react'
import './index.css'
import LimitData from './LimitData'



export default class LimitedService extends Component {
  constructor() {
    super()





  }




  render() {
    return(
        <Fragment>
          <section className="limited__service">

            <div className="limited__service-container">

              <div className="limited__service_form-data">

                <div className="limit__offer-title">
                  <h3>Limited offer</h3>
                </div>


                <div className="discount__offer-title">
                  <h2>Play with us for discount!</h2>
                </div>


                <div className="form__order__container">


                  <LimitData/>


                </div>



              </div>


            </div>

          </section>
        </Fragment>
    )
  }
}