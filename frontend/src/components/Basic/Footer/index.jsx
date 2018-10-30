import React, { Component } from 'react'
import './index.css'
import arrow from '../../sources/images/works__logo/arrow.svg'
import withDsideApi from '../../../HOC/Fetch'
import Poppup from '../../../HOC/OrderPopup/index';
import  Translate  from "translate-components";
import Success from '../../Success/success';

class Footer extends Component {

  constructor (props) {
    super(props)


    this.nameRef = React.createRef()
    this.phoneRef = React.createRef()

    this.state = {
      postActive: false
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
   await this.props.postData(this.nameRef, this.phoneRef)
   await this.updateAfterPost()
  }

  updateAfterPost() {
    this.nameRef.current.value = ''
    this.phoneRef.current.value = ''
    this.onSuccess()
  }

  onSuccess = () => {
    this.setState({postActive: !this.state.postActive})
  }

  render () {
    return (
      <footer>
        <div className="footer__content" style={{display: this.props.style}}>

          <div className="clients__form">

            <div className="form__titles">

              <div className="title__drop">
                <h3 className="golden"><Translate>Drop the line</Translate></h3>
              </div>

              <div className="question__form">
                <p><Translate>Ready to talk to the team who can’t wait to</Translate><br/>
                  <Translate>take your company to new, exciting places?</Translate>
          
                </p>
              </div>

            </div>

            <div className="sending__form">
              <form onSubmit={this.handleSubmit} id="form__dside">
                <div className="inputs__send">
                  <div className="wrapper__name">
                    <div className="shining-underline-cf">
                    <div class="holder"><Translate>Name</Translate></div>
                      <input ref={this.nameRef} type="text" id="name"  /><span></span>
                    </div>
                  </div> 
                  <div className="wrapper__phone">
                    <div className="shining-underline-cf">
                      <div class="holder"><Translate>Phone number (With country code)</Translate></div>
                      <input  pattern="^\+[1-9]{1}[0-9]{3,14}$"  ref={this.phoneRef} id="phone" type="phone"  /><span></span>
                  </div>
                  </div>
                </div>
                <button className="dside__send">
                  <div className="button__content">
                    <span><Translate>Send</Translate></span><div class="whitespace"></div><img src={arrow} alt="" />
                  </div>
                </button>
              </form>
            </div>

          </div>

          <div className="copyright__content">
            <div className="copyright">
              <p>2018 &copy; Dside Agency &trade;. <Translate>All right reserved.</Translate></p>
            </div>

            <div className="social__icons">
              <a href='http://behance.com' target="_blank" className="social__icon-behance">
              </a>
              <a href='http://instagram.com' target="_blank" className="social__icon-instagram">
              </a>
            </div>

          </div>
        </div>
        {this.state.postActive ?  <Success handleSuccess={this.onSuccess} /> : null }
      </footer>
    )
  }
}


export default withDsideApi(Footer, '/home/addOrder/')
