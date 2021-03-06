import React, { Fragment, Component } from "react";
import "./index.css";
import GridImg from "./grid__img.svg";
import LogoWhite from "./LogoWhite.svg";
import PlusHover from "./plus-hover.svg";
import OrderButton from "../OrderButton";
import { Link } from "react-router-dom";
import Poppup from "../../../../../HOC/OrderPopup/index";
import Translate from "translate-components";
import { reactTranslateChangeLanguage } from "translate-components";
import { withRouter } from "react-router-dom";
import Header from "../../../../Basic/Header";
import withDsideApi from "../../../../../HOC/Fetch";
import withLanguage from "../../../../../HOC/withLanguage";
import GradePoppup from "../../../../../HOC/GradePopup";
import OrderPopup from "../../../../../HOC/OrderPopup/index";

class HeaderService extends Component {
  constructor() {
    super();

    this.state = {
      opacity: 0,
      display: "none",
      modalActive: false,
      lang: "",
      modalActiveGrade: false
    };
  }

  componentDidMount() {
    this.setState({
      lang: localStorage.getItem("lang")
    });
  }

  showMenu = async () => {
    if (this.state.opacity == 1) {
      this.setState({ opacity: 0, display: "none" });
    } else {
      await reactTranslateChangeLanguage.bind(this, this.state.lang)();
      await this.setState({ opacity: 1, display: "block" }, () => {});
    }
  };

  changePoppup = () => {
    this.setState({ modalActive: !this.state.modalActive });
  };

  changePoppupGrade = () => {
    this.setState({ modalActiveGrade: !this.state.modalActiveGrade });
  };

  render() {
    return (
      <Fragment>
        <div className="heading__service">
          <header className="header__service">
            <div className="header__navigation">
              <div className="left__heading">
                <div className="menu__inject-news">
                  <div className="grid__service-img" onClick={this.showMenu}>
                    <img src={GridImg} alt="" width="15" />
                  </div>
                </div>
                <div className="logotype__company">
                  <div className="logo__services-white">
                    <Link to={`/${this.props.language}`}>
                      <img src={LogoWhite} alt="" width="90" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="logotype__company">
                <div className="logo__services-white">
                  <img src={LogoWhite} alt="" />
                </div>
              </div>

              <div className="right__heading">
                <nav className="dside-company__links">
                  <li className="behance">
                    <a href="https://dishots.com/u/DSIDE" target="_blank" className="service__icon-behance" />
                  </li>

                  <li className="instagram">
                    <a href={
                      this.props.activeLang[0] == "ru"
                        ? "https://www.instagram.com/dside.ru/"
                        : "https://www.instagram.com/dsidepl"
                    } className="service__icon-instagram" target="_blank" />
                  </li>

                  <li className="header-service__button-order">
                    <a
                      onClick={this.changePoppup}
                      className="header-button__order"
                    >
                      <img src={PlusHover} alt="" width="14" />
                      <Translate>order now</Translate>
                    </a>
                  </li>
                </nav>
              </div>
            </div>
            <div className={"head_container_with-button"}>
              <div
                className={`dside__header-text_container ${
                  this.props.textContainer
                }`}
              >
                <div
                  className={`logo__service-text ${this.props.stylelogotext}`}
                >
                  {this.props.textHeader}
                </div>
                <div
                  className={`logo__service-img ${this.props.imgLogoPosition}`}
                >
                  <img src={this.props.logoHeader} alt="" />
                </div>

                <div className="logo__service_slogan">
                  <Translate>{this.props.serviceSlogan}</Translate>
                </div>
              </div>

              <OrderButton handlePopup={this.changePoppup} />
            </div>
            {/*<div className="service_button">*/}
            {/*order now*/}
            {/*</div>*/}
          </header>
          {/* <div className="main__header" style={{top: '80px', display: this.state.display, opacity: this.state.opacity, transition: '0.3s'}}>
              <div className="main__header-content">
                <div className="main__header-left">

                  <div className="menu__header-column">
                    <div className="menu__header-item">
                      <div className="description__menu-title">
                        <Link to={`/${this.state.lang}/aboutus`}   className="link__menu"><Translate>About Us</Translate></Link>

                      </div>
                    </div>

                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link to={`/${this.state.lang}/contactus`}  className="link__menu"><Translate>Contact Us</Translate></Link>
                      </div>
                      <div className="description__menu-title">
                      </div>
                    </div>
                  </div>



                  <div className="menu__header-column">
                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link to={`/${this.state.lang}/blog`}  className="link__menu"><Translate>Blog</Translate></Link>
                      </div>
                      <div className="description__menu-title">

                      </div>
                    </div>

                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link to={`/${this.state.lang}`}    className="link__menu"><Translate>Home</Translate></Link>
                      </div>
                      <div className="description__menu-title">
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main__header-right">

                </div>
              </div> */}
          <HeaderMenu
            {...this.state}
            handleChangePoppupGrade={this.changePoppupGrade}
            {...this.props}
          />

          <div className="radius__wrapper" />
          <OrderPopup
            modalStatus={this.state.modalActive}
            onClose={this.changePoppup}
          />
        </div>

        {
          <GradePoppup
            modalStatus={this.state.modalActiveGrade}
            onClose={this.changePoppupGrade}
          />
        }
      </Fragment>
    );
  }
}

export default withRouter(
  withDsideApi(HeaderService, `/review/getReviewList/`, "GRADE")
);
