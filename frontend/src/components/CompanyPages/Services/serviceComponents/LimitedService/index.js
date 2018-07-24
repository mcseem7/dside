import React, {Component, Fragment} from 'react'
import './index.css'


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

                  <div className="timer__back-order">

                    <div className="timer-days__order">
                      <p id="time">21</p>
                      <p className="title__timer">days</p>
                    </div>

                    <div className="timer-hours__order">
                      <p id="time">20</p>
                      <p className="title__timer">hours</p>
                    </div>

                    <div className="timer-minutes__order">
                      <p id="time">53</p>
                      <p className="title__timer">minutes</p>
                    </div>

                    <div className="timer-seconds__order">
                      <p id="time">11</p>
                      <p className="title__timer">seconds</p>
                    </div>


                  </div>

                </div>



              </div>


            </div>

          </section>
        </Fragment>
    )
  }
}