import React, { Component } from "react";
import ContactMap from "./contactmap.svg";
import Header from "../../Basic/Header";
import "./index.css";
import arrow from "../../sources/images/works__logo/arrow.svg";
import withDsideApi from "../../../HOC/Fetch";
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import Success from "../../Success/success";
import withPoppupHOC from "../../../HOC/Poppup";
import  Arrow  from './arrow.svg';
import OrderPoppup from "../../../HOC/OrderPopup/index";
import Helmet from 'react-helmet-async'
import ScrollAnimation from 'react-animate-on-scroll'
import ErrorValidate from '../../ErrorValidate/index'

class Contact extends Component {
  constructor() {
    super();

    this.nameRef = React.createRef();
     this.phoneRef = React.createRef();

    this.state = {
      postActive: false,
      errorActive: false
    };
    this.state = {
     display: "none",
      modalActiveOrder: false,
      modalActiveGrade: false,
      lang: ""
    };
  }

  componentDidMount() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem("lang"))();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }
  handleSubmit = async event => {
    event.preventDefault();
    await this.props.postData(this.nameRef, this.phoneRef);
    await this.checkingValidate();
  };
changePoppup = () => {
    this.setState({ modalActiveOrder: !this.state.modalActiveOrder });
  };
  checkingValidate = () => {
    if(!this.props.postOrderActive) {
      this.setState({errorActive: !this.state.errorActive})
      setTimeout(() => {
        this.setState({errorActive: !this.state.errorActive})
      }, 1000);
    } else {
      this.updateAfterPost()
    }
  }

  updateAfterPost() {
    this.nameRef.current.value = "";
    this.phoneRef.current.value = "";
    this.onSuccess();
  }

  onSuccess = () => {
    this.setState({ postActive: !this.state.postActive });
  };

  hideError = () => {
    this.setState({errorActive: !this.state.errorActive})
  }

  render() {
  
    const framegoo =
      '<iframe src="https://snazzymaps.com/embed/112254" width="100%" height="400px" style="border:none;"></iframe>'
      
    return (
      <div>
     
        <Helmet>
          <title>Dside ContactUs</title>
        </Helmet>
        <section id="google__maps-container">
          <div
            className="google_map"
            dangerouslySetInnerHTML={{ __html: framegoo }}
          />
        </section>
        <section id="contact-us__container">
          <div className="background__contactus">
            <div className="contact-us__form_container">
              <div className="left__form-container">
                <div className="title__form-contact">
                  <h3>
                    <Translate>Contact Us</Translate>
                  </h3>
                </div>

                <div className="contactus__form_active">
                  <div className="clients__form">
                    <div className="form__titles">
                      <div className="title__drop">
                        <h3>
                          <Translate>Drop the line</Translate>
                        </h3>
                      </div>

                      <div className="question__form">
                        <p>
                          <Translate>
                            Ready to talk to the team who can’t wait to
                          </Translate>
                          <br />
                          <Translate>
                            take your company to new, exciting places?
                          </Translate>
                        </p>
                      </div>
                    </div>

                    <div className="sending__form">
                      <form onSubmit={this.handleSubmit} id="form__dside">
                        <div className="inputs__send">
                        <div className="wrapper__name contact-input">
                    <div className="shining-underline-cf ">
                    <div class="holder service__contact"><Translate>Name</Translate></div>
                      <input style={{background:'none'}} ref={this.nameRef} placeholder="John Doe"  maxlength="50" minlength="2" type="text" id="name" required="required" /><span></span>
                    </div>
                  </div> 
                  <div className="wrapper__phone contact-input">
                    <div className="shining-underline-cf ">
                      <div class="holder service__contact"><Translate>Phone number (With country code)</Translate></div>
                      <input style={{background:'none'}} placeholder="+48 123 456 789"  pattern="^\+[1-9]{1}[0-9]{3,14}$" ref={this.phoneRef} id="phone" maxlength="50" minlength="6" type="text" required="required" /><span></span>
                  </div>
                  </div>
                        </div>

                        <button className="dside__send">
                  <div className="contact__content-send">
                    <button className="contact__btn-send">
                                <span className="blacked"><Translate>Send</Translate></span>
                                <img className="button__content" src={Arrow} alt=""/>
                            </button>
                  </div>
                </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right__form-container">
                <div className="right__form-question_title">
                  <h4>
                    <Translate>Awaiting your questions</Translate>
                  </h4>
                  <div className="right__form_phone">
                    <h2><Translate>+48 731 922 322</Translate></h2>
                  </div>
                </div>

                <div className="right__form_street">
                  <h4>
                    <Translate>Find us here</Translate>
                  </h4>
                  <div className="right__form_phone">
                    <h3>
                      <Translate>Aleja Solidarności</Translate> 117,{" "}
                      <Translate>office</Translate> 805,{" "}
                      <Translate>00-140, Warszawa</Translate>
                    </h3>
                  </div>
                </div>
                <div className="right__form_street">
                  <h4>
                    <Translate>E-mail</Translate>
                  </h4>
                  <div className="right__form_phone">
                    <h3>
                      info@mydside.com
                    </h3>
                  </div>
                </div>
                <div className="contact__content-send"  onClick={this.changePoppup}>
                            <button className="contact__btn-send">
                                <span><Translate>Order call</Translate></span>
                                <img className="button__content" src={Arrow} alt=""/>
                            </button>
                </div>
              </div>
            </div>
            <div className="copyright__content">
              <div className="footer__copyright">
                <div className="copyright">
                  <p>2019 &copy; Dside Agency &trade;. All right reserved.</p>
                </div>

                <div className="social__icons">
                  <div className="social__icon-behance">
                    <a href=""> </a>
                  </div>

                  <div className="social__icon-instagram">
                    <a href=""> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {this.state.postActive ?  <Success 
        textSuccess={<Translate>Thank you! We will call you back in 30 seconds!</Translate>} 
        iconSuccess={ <div class="loader">
        <svg class="circular">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-color="#f00" stroke-miterlimit="10" />
        </svg>
        <svg class="suc">
            <path class="checkmark__check" fill="none" d="M10.7,20.4l5.3,5.3l12.4-12.5"></path>
        </svg>
    </div>}
        handleSuccess={this.onSuccess} /> : null }

        {this.state.errorActive ?  <ErrorValidate
        textError={<Translate>Fields are not all filled! Please fill in all fields!</Translate>} 
        handleError={this.hideError} /> : null }
        <OrderPoppup modalStatus={this.state.modalActiveOrder} onClose={this.changePoppup} />
      </div>
    );
  }
}

export default withPoppupHOC(withDsideApi(Contact, "/home/addOrder/"));
