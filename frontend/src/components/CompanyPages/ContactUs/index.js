import React, { Component } from "react";
import ContactMap from "./contactmap.svg";
import Header from "../../Basic/Header";
import "./index.css";
import arrow from "../../sources/images/works__logo/arrow.svg";
import withDsideApi from "../../../HOC/Fetch";
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import Success from "../../Success/success";
import withPoppupHOC from "../../../HOC/Poppup";
import Helmet from 'react-helmet-async'

class Contact extends Component {
  constructor() {
    super();

    this.nameRef = React.createRef();
    this.phoneRef = React.createRef();

    this.state = {
      postActive: false
    };
  }

  componentDidMount() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem("lang"))();
  }

  handleSubmit = async event => {
    event.preventDefault();
    await this.props.postData(this.nameRef, this.phoneRef);
    await this.updateAfterPost();
  };

  updateAfterPost() {
    this.nameRef.current.value = "";
    this.phoneRef.current.value = "";
    this.onSuccess();
  }

  onSuccess = () => {
    this.setState({ postActive: !this.state.postActive });
  };

  render() {
    //  (document.getElementById("map_canvas"), {
    //    panControl: false,
    //    zoomControl: false,
    //    scaleControl: false,
    // });
    const framegoo =
      '<iframe src="https://snazzymaps.com/embed/98430" width="100%" height="400px" style="border:none;"></iframe>';

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
                          <div className="wrapper-holder__name">
                            <div class="holder__poppup">
                              <Translate>name</Translate>
                            </div>
                            <input ref={this.nameRef} type="text" id="name" />
                          </div>
                          <div className="wrapper-holder__phone">
                            <div class="holder__poppup">
                              <Translate>phone number in format +</Translate>
                            </div>
                            <input
                              ref={this.phoneRef}
                              pattern="^\+[1-9]{1}[0-9]{3,14}$"
                              id="phone"
                              type="phone"
                            />
                          </div>
                        </div>

                        <button className="dside__send">
                          <div className="button__content">
                            <span className="send__title">
                              <Translate>Send</Translate>
                            </span>{" "}
                            <img src={arrow} alt="" />
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
                    <Translate>Awaiting Questions</Translate>
                  </h4>
                  <div className="right__form_phone">
                    <h2><Translate>+48 570 670 311</Translate></h2>
                  </div>
                </div>

                <div className="right__form_street">
                  <h4>
                    <Translate>Find us here</Translate>
                  </h4>
                  <div className="right__form_phone">
                    <h2>
                      <Translate>Aleja Solidarności</Translate> 117,{" "}
                      <Translate>office</Translate> 805
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright__content">
              <div className="footer__copyright">
                <div className="copyright">
                  <p>2018 &copy; Dside Agency &trade;. All right reserved.</p>
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
        {this.state.postActive ? (
          <Success handleSuccess={this.onSuccess} />
        ) : null}
      </div>
    );
  }
}

export default withPoppupHOC(withDsideApi(Contact, "/home/addOrder/"));
