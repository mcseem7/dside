import React, { Component, Fragment } from "react";
import HeaderService from "../serviceComponents/HeaderService/index";
import CaseService from "../serviceComponents/CaseService/index";
import LimitedService from "../serviceComponents/LimitedService";
import "./index.css";
import BadLogo from "./bad__logo.png";
import GoodLogo from "./goodlogo.png";
import logoHeader from "./logo__header-service.png";
import Footer from "../../../Basic/Footer";
import HeaderPost from "../../../DynamicContent/Header__Post/index";
import WeCare from "../../../Basic/TrustBlocks/WeCare";
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import Own from "../../../Basic/TrustBlocks/Own";
import { HeroVideo } from "react-hero-video";
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import Poppup from "../../../../HOC/OrderPopup/index";
import withDsideApi from "../../../../HOC/Fetch";

class LogoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changePoppup = () => {
    this.setState({ modalActive: !this.state.modalActive });
  };

  render() {
    const idVideo = "eJ8SOYUkWl0";
    return (
      <div>
        <div className="video-wrap">
          <HeroVideo
            videoSrc={`https://www.youtube.com/embed/${idVideo}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&fs=1`}
          />
          <div id="vidtop-content">
            <HeaderService
              textContainer={"dside_textContainer-logo"}
              stylelogotext={"logo__service-text_grafiklog"}
              logoHeader={logoHeader}
              imgLogoPosition={"logo__service-img_grafiklog"}
              serviceSlogan={[
                <Fragment>
                  <Translate>DSIDE to make your logo work</Translate> <br />{" "}
                  <Translate>BETTER</Translate>
                </Fragment>
              ]}
              serviceCategory={"Logo"}
            />
          </div>
        </div>

        <section
          className="logo__service-case_studies"
          style={{ background: "#fff" }}
        >
          <div className="container__case-studies">
            <div className="case-title">
              <h3>Case Studies</h3>
            </div>
            <div className="case-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>

            <div className="features__cases">
              <div className="features_case-baglogo">
                <div className="bag__logo-img_wrapper">
                  <img src={BadLogo} alt="" />
                </div>

                <div className="bad__logo-description_container">
                  <div className="bad__logo-title">
                    <div className="bad__title-apple">
                      <h3>Old</h3>
                      <h3>bad logo apple</h3>
                    </div>
                  </div>

                  <div className="bad__logo-description">
                    <ul className="bad__logo-list">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam
                      </li>
                      <li>
                        {" "}
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="features_case-goodlogo">
                <div className="bag__logo-img_wrapper">
                  <img src={GoodLogo} alt="" />
                </div>

                <div className="bad__logo-description_container">
                  <div className="bad__logo-title">
                    <div className="bad__title-apple">
                      <h3>new</h3>
                      <h3>good logo apple</h3>
                    </div>
                  </div>

                  <div className="bad__logo-description">
                    <ul className="bad__logo-list">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam
                      </li>
                      <li>
                        {" "}
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-centered center">
            <div className="order-now-btn" onClick={this.changePoppup}>
              Order now.
            </div>
          </div>
        </section>
        <CaseService {...this.props} name="logos" />
        <WeCare name="logotypes" />
        <Advantages />
        <Own />
        <LimitedService />
        <Footer />
        {this.state.modalActive ? <Poppup onClose={this.changePoppup} /> : null}
      </div>
    );
  }
}

export default withDsideApi(LogoPage, "/portfolio/getPortfolioItems/Logo/");
