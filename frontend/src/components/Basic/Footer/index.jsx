import React, { Component } from 'react'
import './index.css'
import withDsideApi from '../../../HOC/Fetch'
import OrderPoppup from "../../../HOC/OrderPopup/index";
import  Translate  from "translate-components";
import  LogoRed  from './dsideLogo.svg';
import  Arrow  from './arrow.svg';
import { NavLink } from "react-router-dom";

class Footer extends Component {

  constructor (props) {
    super(props)
    this.state = {
     display: "none",
      modalActiveOrder: false,
      modalActiveGrade: false,
      lang: ""
    };
  }



  changePoppup = () => {
    this.setState({ modalActiveOrder: !this.state.modalActiveOrder });
  };

  changePoppupGrade = () => {
    this.setState({ modalActiveGrade: !this.state.modalActiveGrade });
  }

  render () {

    return (
        <div>
           <footer>
                <div className="footer__wrap__head">
                    <div className="footer__head footer__content text-center">
                        <p className="footer__head-write"><Translate>Drop the line!</Translate></p>
                        <a className="footer__head-mail" href="mailto:info@mydside.com">info@mydside.com</a>
                    </div>
                </div>
                <div className="footer__wrap__middle">
                    <div className="lines"></div>
                    <div className="footer__middle footer__content">
                      <div className="footer__content-info">
                            <a href="/" className="footer__content-logo">
                              <img src={LogoRed} alt="DSIDE Logo"/>
                            </a>
                            <p className="welcome"><Translate>We welcome you</Translate></p>
                            <p>
                                <span>Aleja Solidarnosci 117, 00-140</span><br />
                                <span>Warszawa, Polska</span>
                            </p>
                            <p>+485741557711</p>
                            <p><a href="mailto:info@mydside.com">info@mydside.com</a></p>

                        </div>
                       
                        <div className="footer__content-services">
                            <p className="heading-list"><Translate>Services</Translate></p>
                            <ul>
                                <li className="shining-underline">
                                <NavLink
                                 to={`/${this.props.language}/services/design`}
                                 className="link">
                                     <Translate>Design</Translate>
                                 <span className="mainnavshine"></span>
                                </NavLink>
                                 </li>
                                <li className="shining-underline">
                                <NavLink
                                 to={`/${this.props.language}/services/website`}
                                 className="link">
                                     <Translate>Websites</Translate>
                                 <span className="mainnavshine"></span>
                                </NavLink>
                                 </li>
                                <li className="shining-underline">
                                <NavLink
                                 to={`/${this.props.language}/services/ecommerce`}
                                 className="link">
                                    <span>E-commerce</span>
                                 <span className="mainnavshine"></span>
                                </NavLink>
                                 </li>

                            </ul>
                        </div>
                        <div className="footer__content-about">
                            <p className="heading-list"><Translate>Details</Translate></p>
                            <ul>
                                <li className="shining-underline">
                                <NavLink
                                 to={`/${this.props.language}/portfolio`}
                                 className="link">
                                     <Translate>Projects</Translate>
                                 <span className="mainnavshine"></span>
                                </NavLink>
                                 </li>
                                <li className="shining-underline">
                                <NavLink
                                 to={`/${this.props.language}/process`}
                                 className="link">
                                     <Translate>Process</Translate>
                                 <span className="mainnavshine"></span>
                                </NavLink>
                                 </li>
                                <li className="shining-underline">
                                <NavLink
                                 to={`/${this.props.language}/aboutus`}
                                 className="link">
                                     <Translate>About</Translate>
                                 <span className="mainnavshine"></span>
                                </NavLink>
                                 </li>
                                <li className="shining-underline">
                                <NavLink
                                 to={`/${this.props.language}/contactus`}
                                 className="link">
                                     <Translate>Contact Us</Translate>
                                 <span className="mainnavshine"></span>
                                </NavLink>
                                 </li>
                                {/*<li className="shining-underline">
                                <NavLink
                                 to={`/${this.props.language}/blog`}
                                 className="link">
                                     <Translate>Blog</Translate>
                                 <span className="mainnavshine"></span>
                                </NavLink>
                                 </li>
                                 */}
                            </ul>
                        </div>
                        <div className="footer__content-send"  onClick={this.changePoppup}>
                            <button className="btn-send">
                                <Translate>Order now!</Translate>
                                <img className="button__content" src={Arrow} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer__wrap__down">
                    <div className="footer__down footer__content">
                        <p>
                           2019 © Dside Agency ™. All right reserved.
                        </p>
                        <p className="mid-p">
                          Respublika Sp. z o.o., NIP 522-31-00-244, NIP EU PL5223100244, REGON 368280744.
                        </p>
                        <p>
                          <div className="social__icons">
              <a href='http://dishots.com/u/DSIDE' target="_blank" rel="noopener noreferrer" className="social__icon-behance">
              </a>
              <a href='http://instagram.com/dsidepl' target="_blank" rel="noopener noreferrer" className="social__icon-instagram">
              </a>
            </div>
                        </p>
                    </div>
                </div>
            </footer>

         <OrderPoppup modalStatus={this.state.modalActiveOrder} onClose={this.changePoppup} />
            </div>
    );
  }
}


export default withDsideApi(Footer, '/home/addOrder/')
