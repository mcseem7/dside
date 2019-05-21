import React, { Component } from "react";
import "./index.css";
import withDsideApi from "../../../HOC/Fetch";
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import Success from "../../Success/success";
import withPoppupHOC from "../../../HOC/Poppup";
import  Arrow  from './arrow.svg';
import OrderPoppup from "../../../HOC/OrderPopup/index";
import Helmet from 'react-helmet-async'
import ErrorValidate from '../../ErrorValidate/index'
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

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


                    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={(values, { setSubmitting }) => {
          this.props.getSubmitForm(this.nameRef.current.value, this.phoneRef.current.value);
          setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        phone: Yup.string()
          .min(15, 'is not right')
          .required('*'),
        name: Yup.string()
          .min(2, 'is too short')
          .max(30, 'Too long name')
          .required('*'),
      })}
    >
      {props => {
        const {
          values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
        return (
                this.state.result ?
    <div id="form-result">
        <h3 id="thanks"><Translate>Thank you! Application successfully submitted!</Translate></h3>
      </div> :  <div id="form-itself">
        <h3><Translate>Leave your phone number</Translate></h3>
          <p><Translate>And you will receive a free consultation on the question that interests you. Usually we call back
            within 30 seconds.
          </Translate></p>
              <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
            <input
              id="name"
              type="text"
              required
              ref={this.nameRef}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name ? 'text-input error' : 'text-input'
              }
            /><label htmlFor="name">
              <Translate useRawText={true}>Name</Translate><div className="input-feedback"><Translate useRawText={true}>{errors.name && touched.name && (
             errors.name
            )}</Translate></div>
            </label><div className="bar"></div></div>
            <div className="input-container">
             <InputMask
              maskChar={null}
              defaultValue={this.props.language !== "pl" ? "+" : "+48"}
              mask={this.props.language !== "pl" ? "+99 999 999 99 99" : "+48 999-999-999"}
              id="phone"
              type="text"
              required
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={this.phoneRef}
              className={
                errors.phone && touched.phone ? 'text-input error' : 'text-input'
              }
            /><label htmlFor="phone">
            <Translate useRawText={true}>Phone</Translate><div className="input-feedback"><Translate useRawText={true}>{errors.phone && touched.phone && (
             errors.phone
            )}</Translate></div>
          </label><div className="bar"></div></div>

<div className="button-container">
            <button type="submit" className="appform-button" disabled={isSubmitting}>
              <Translate>Send</Translate>
            </button>
</div>
          </form>     </div></div>
        );
      }}
    </Formik>

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
                    E-mail
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
                  <p>2019 &copy; <Translate>DSIDE Agency</Translate> &trade;. All right reserved.</p>
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
