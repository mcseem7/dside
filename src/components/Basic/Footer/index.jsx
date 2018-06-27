import React, {Component} from 'react'
import Behance from '../Header/behance.png'
import Instagram from '../Header/instagram.png'
import './index.css'
import arrow from './arrow.svg'

export default class Footer extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
        <footer>
          <div className="footer__content">

            <div className="clients__form">


            <div className="form__titles">

              <div className="title__drop">
                <h3>Drop the line</h3>
              </div>

              <div className="question__form">
                <p>Ready to talk to the team who can’t wait to<br/>
                  take your brand to new, exciting places?</p>
              </div>

            </div>



              <div className="sending__form">
            <form action="http://host" id="form__dside">
              <div className="inputs__send">
              <div className="wrapper__name">
                <input type="text" id="name" placeholder="name"/>
              </div>
            <div className="wrapper__phone">
              <input id='phone' type="phone" placeholder="phone"/>
            </div>
              </div>
              <button className="dside__send">
                <div className="button__content">
                  <p>Send</p> <img src={arrow} alt=""/></div></button>
            </form>
          </div>

            </div>



            <div className="copyright__content">
              <div className="copyright">
                <p>2018 &copy; Dside Agency &trade;. All right reserved.</p>
              </div>

              <div className="social__icons">
                <div className="social__icon-behance">
                  <a href="">        <img src={Behance} alt=""/></a>
                </div>

                <div className="social__icon-instagram">
                  <a href="">       <img src={Instagram} alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
  }

}