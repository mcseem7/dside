import React, { Component } from 'react'
import './index.css'
import arrow from '../../sources/images/works__logo/arrow.svg'
import withDsideApi from '../../../HOC/Fetch'

 class Footer extends Component {

  constructor (props) {
    super(props)

    this.nameRef = React.createRef()
    this.phoneRef = React.createRef()

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postData(this.nameRef, this.phoneRef)
  }

  render () {
    return (
      <footer>
        <div className="footer__content">

          <div className="clients__form">

            <div className="form__titles">

              <div className="title__drop">
                <h3>Drop the line</h3>
              </div>

              <div className="question__form">
                <p>Ready to talk to the team who can’t wait to<br />
                  take your brand to new, exciting places?
                </p>
              </div>

            </div>

            <div className="sending__form">
              <form onSubmit={this.handleSubmit} id="form__dside">
                <div className="inputs__send">
                  <div className="wrapper__name">

                    <input ref={this.nameRef} type="text" id="name" placeholder="name" />
                  </div>
                  <div className="wrapper__phone">
                    <input ref={this.phoneRef} id="phone" type="phone" placeholder="phone" />

                    <div className="shining-underline-cf">
                    <input type="text" id="name"  placeholder="Your Name"/><span></span>
                  </div>
                  </div>
                  <div className="wrapper__phone">
                    <div className="shining-underline-cf">
                    <input id="phone" type="phone" placeholder="Phone" /><span></span>
                  </div>
                  </div>
                </div>
                <button className="dside__send">
                  <div className="button__content">
                    <p>Send</p> <img src={arrow} alt="" />
                  </div>
                </button>
              </form>
            </div>

          </div>

          <div className="copyright__content">
            <div className="copyright">
              <p>2018 &copy; Dside Agency &trade;. All right reserved.</p>
            </div>

            <div className="social__icons">
              <div className="social__icon-behance">
                <a href="https://dishots.com/u/DSIDE" target="_blank">        </a>
              </div>

              <div className="social__icon-instagram">
                <a href="https://instagram.com/dsided" target="_blank">       </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}


export default withDsideApi(Footer,'/home/addOrder/', '/en')
