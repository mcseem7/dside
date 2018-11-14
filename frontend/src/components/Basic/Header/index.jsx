import React, { Component } from "react";
import "./index.css";
import GridIcon from "./grid_img.svg";
import PlusIcon from "./plus.svg";
import Logo from "./Logo.svg";
import { NavLink, Link, withRouter } from "react-router-dom";
import OrderPoppup from "../../../HOC/OrderPopup/index";
import GradePoppup from "../../../HOC/GradePopup/index";
import pl from "../../../HOC/ChangeLanguage/svg/006-poland.svg";
import cz from "../../../HOC/ChangeLanguage/svg/003-czech-republic.svg";
import ru from "../../../HOC/ChangeLanguage/svg/005-russia.svg";
import Translate from "translate-components";
import withPoppupHOC from "../../../HOC/Poppup";
import withLanguage from "../../../HOC/withLanguage";
import homeDside from "./homeDside.png";
import { compose } from "recompose";
import withDsideApi from "../../../HOC/Fetch";
import moment from 'moment'
import HeaderMenu from "./HeaderMenu";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
      display: "none",
      modalActiveOrder: false,
      modalActiveGrade: false,
      lang: ""
    };
  }

  showMenu = () => {
    if (this.state.opacity == 1) {
      this.setState({ opacity: 0, display: "none" });
    } else {
      this.setState({ opacity: 1, display: "block" });
    }
  };

  changePoppup = () => {
    this.setState({ modalActiveOrder: !this.state.modalActiveOrder });
  };

  changePoppupGrade = () => {
    this.setState({ modalActiveGrade: !this.state.modalActiveGrade });
  }

  render() {
    const {history, location} = this.props   
   
    return (
      <div
        className="header__container"
        style={{ display: this.props.style, zIndex: 10 }}
      >
        <header className="basic__header">
          <div className="basic__header-content">
            <div className="header__content">
              <div className="left__content-icons">
                <div className="check__work-sockets">
                  <div className="check__work" onClick={this.showMenu}>
                    <img src={GridIcon} width="15" />
                  </div>
                </div>

                <div className="add__work_wrapper">
                  <div className="add__work">
                    <img
                      src={PlusIcon}
                      onClick={this.changePoppup}
                      className="add__work_plus"
                      alt=""
                      width="14"
                    />
                  </div>
                </div>
              </div>

              <div className="mid__content-logo">
                <div className="logo__container">
                  <div className="logo">
                    <NavLink
                      to={`/${this.props.language}`}
                      className="link link--dside"
                    >
                      <span>
                        <svg
                          className="svg-logo"
                          width="86px"
                          height="26px"
                          viewBox="0 0 209 39"
                          version="1.1"
                          xmlns="https://www.w3.org/2000/svg"
                          xmlnsXlink="https://www.w3.org/1999/xlink"
                        >
                          <pattern
                            id="rollover"
                            width="1"
                            height="1"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <image
                              id="rollover-image"
                              xlinkHref="//quest.masons.pl/1.gif"
                              width="100"
                              height="100"
                              preserveAspectRatio="none"
                            />
                          </pattern>
                          <g id="main-logo">
                            <path
                              id="XMLID_19_"
                              className="st0"
                              d="M140.3,8.7c-2.2-2.2-4.7-4.2-7.6-5.5c-2.9-1.3-6-2.2-9.3-2.2H103v49h1.4h7.3h11.6
		c3.3,0,6.4-0.8,9.3-2.1c2.9-1.3,5.5-3.1,7.6-5.2c2.2-2.2,3.9-4.8,5.1-7.7c1.3-2.9,1.9-6,1.9-9.3c0-3.3-0.6-6.4-1.9-9.3
		C144.2,13.5,142.5,10.9,140.3,8.7z M137.9,31.7c-0.8,1.9-1.9,3.6-3.4,5.1c-1.5,1.5-3.2,2.4-5.1,3.2c-1.9,0.8-3.9,1-6,1H112V29.8V10
		h11.3c2.1,0,4.1,0.4,6,1.2c1.9,0.8,3.6,1.9,5.1,3.4c1.5,1.5,2.6,3.2,3.4,5.1c0.8,1.9,1.2,3.9,1.2,6
		C139.1,27.8,138.7,29.8,137.9,31.7z"
                            />
                            <path
                              id="XMLID_20_"
                              className="st0 inner"
                              d="M37.1,8.8c-2.2-2.2-4.7-4.2-7.7-5.5C26.5,2,23.4,1,20.1,1H13H0v49h1.1h7.3H13h7.1
		c3.3,0,6.4-0.7,9.4-2c2.9-1.3,5.5-3,7.7-5.2c2.2-2.2,3.9-4.8,5.2-7.7c1.3-2.9,1.9-6.1,1.9-9.4c0-3.3-0.6-6.4-1.9-9.4
		C41,13.5,39.3,10.9,37.1,8.8z"
                            />
                            <path
                              id="XMLID_20_"
                              className="st0 outer"
                              d="M37.1,8.8c-2.2-2.2-4.7-4.2-7.7-5.5C26.5,2,23.4,1,20.1,1H13H0v49h1.1h7.3H13h7.1
		c3.3,0,6.4-0.7,9.4-2c2.9-1.3,5.5-3,7.7-5.2c2.2-2.2,3.9-4.8,5.2-7.7c1.3-2.9,1.9-6.1,1.9-9.4c0-3.3-0.6-6.4-1.9-9.4
		C41,13.5,39.3,10.9,37.1,8.8z"
                            />
                            <rect
                              id="XMLID_21_"
                              x="88"
                              y="1"
                              className="st0"
                              width="9"
                              height="49"
                            />
                            <path
                              id="XMLID_22_"
                              className="st0"
                              d="M76.6,25.6c-1-0.7-2-1.3-3-1.8c-1-0.5-2-0.9-2.8-1.3c-0.9-0.4-1.6-0.6-2.3-0.8
		c-0.6-0.2-1.1-0.3-1.3-0.4l-0.8-0.2c-0.8-0.2-1.7-0.5-2.7-0.8c-1-0.3-1.9-0.6-2.7-1.1c-1.1-0.5-1.9-1.2-2.5-1.8
		c-0.8-0.9-1.2-1.9-1.2-3.1c0-2,1-3.6,3-4.9C61,9,61.8,8.7,62.7,8.5c0.9-0.2,1.8-0.3,2.7-0.3c2.1,0,4.1,0.5,6,1.4
		c1.3,0.6,2.5,1.6,3.8,2.8L81,6.4c-0.4-0.3-0.8-0.7-1.3-1.1C79.3,5,78.7,4.6,78,4.2c-1.3-0.8-3.1-1.6-5.3-2.3
		c-2.2-0.8-5-1.2-8.3-1.2c-1.8,0-3.6,0.3-5.4,0.8c-1.8,0.5-3.5,1.3-5,2.5c-1.5,1.2-2.7,2.7-3.7,4.5c-0.9,1.8-1.4,4.1-1.4,6.8
		c0,4.1,2.1,7.5,6.2,10.3c1.8,1.2,3.6,2.1,5.4,2.8c1.8,0.7,3.2,1.2,4.1,1.4c0.2,0.1,0.3,0.1,0.4,0.1c0.1,0.1,0.3,0.1,0.5,0.2
		c0.2,0,0.4,0.1,0.6,0.2c0.7,0.2,1.6,0.5,2.5,0.8c0.9,0.3,1.8,0.6,2.6,1.1c1,0.5,1.8,1.1,2.5,1.8c0.8,0.9,1.2,1.9,1.2,3.1
		c0,1.9-0.8,3.4-2.3,4.5c-0.7,0.5-1.6,0.9-2.6,1.2c-1,0.3-2.1,0.4-3.3,0.4c-0.6,0-1.5-0.1-2.5-0.2c-1-0.1-2.1-0.4-3.2-0.9
		c-1.9-0.7-3.6-1.8-5.1-3.1l-5.7,5.7c1.9,1.6,4.4,2.9,7.3,4.1c3,1.2,6.3,1.8,10.1,1.8c2.4,0,4.5-0.3,6.4-1c1.9-0.7,3.5-1.7,4.9-2.9
		c1.3-1.3,2.4-2.8,3.1-4.6c0.7-1.8,1.1-3.8,1.1-6.1C83.3,32,81.1,28.5,76.6,25.6z"
                            />
                            <polygon
                              id="XMLID_23_"
                              className="st0"
                              points="152,50 185,50 185,41 161,41 161,30 178,30 181.2,21 161,21 161,10 185,10 185,1
		152,1 	"
                            />
                            <rect
                              id="XMLID_24_"
                              x="191"
                              y="41"
                              className="st0"
                              width="9"
                              height="9"
                            />
                          </g>
                        </svg>
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="right__content-socials">
                <div className="social__icons">
                  <a
                    href="http://behance.com"
                    className="social__icon-behance"
                  />
                  <a
                    target="__blank"
                    href={
                      this.props.activeLang[0] == "ru"
                        ? "https://www.instagram.com/dside.ru/"
                        : "https://www.instagram.com/"
                    }
                    className="social__icon-instagram"
                  />
                </div>

                <div className="check__work-sockets">
                  <div className="check__work" onClick={this.showMenu}>
                    <img src={GridIcon} alt="" width="15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {<HeaderMenu
        {...this.state}
        handleShowMenu={this.showMenu}
         handleChangePoppupGrade={this.changePoppupGrade} 
         {...this.props} />}

        {this.state.modalActiveOrder ? (
          <OrderPoppup onClose={this.changePoppup} />
        ) : null}
          {this.state.modalActiveGrade ? (
          <GradePoppup onClose={this.changePoppupGrade} />
        ) : null}
      </div>
    );
  }
}

export default compose(
  withLanguage,
  withRouter,
  withDsideApi
)(Header, `/review/getReviewList/`, "GRADE");
