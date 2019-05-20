import React, { Component } from "react";
import "./index.css";
import GridIcon from "./grid_img.svg";
import EN from "./uk.svg";
import PL from "./poland.svg";
import RU from "./russia.svg";
import { reactTranslateChangeLanguage } from "translate-components";
import { NavLink, withRouter } from "react-router-dom";
import OrderPoppup from "../../../HOC/OrderPopup/index";
import Translate from "translate-components";
import { compose } from "recompose";
import withDsideApi from "../../../HOC/Fetch";
import fire from './fire.gif'
import "./animate.css";
var LangEN = EN;
var LangRU = RU;
var LangPL = PL;

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalActiveOrder: false,
      isToggled: false
    };
    this.handleClicker = this.handleClicker.bind(this);
  }
  componentDidMount() {
  localStorage.setItem('lang', this.state.lang)
  this.setState({lang: localStorage.getItem('lang')})
  reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  };

  componentWillMount() {
      this.setState({lang: localStorage.getItem('lang')})
      reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }
  handleClicker(e) {
    this.setState({isToggled: !this.state.isToggled});
  }
  alreadyUpdate = (data) => {
      const {location} = this.props;
      localStorage.setItem('lang', `${data}`);
      this.props.history.push(`/${data + location.pathname.substr(3)}`);
      this.setState({lang: localStorage.getItem('lang')});
          console.log('Setting Lang', `${data}`);
  };
  changePoppup = () => {
    this.setState({ modalActiveOrder: !this.state.modalActiveOrder });
  };
  render() {
    const {location} = this.props;
    const langClass = (route) => { return ('/' + this.state.lang + location.pathname.substr(3)) === (route + location.pathname.substr(3)) ? "active" : null }
      if (this.state.lang === 'en'){
            var controllerLang = LangEN;
        } else if (this.state.lang === 'ru'){
            var controllerLang = LangRU;
        } else {
            var controllerLang = LangPL;
        }
        console.log(this.state.lang);
        console.log(this.props.language);
        console.log('LangStorage', localStorage.getItem('lang'));
      return (

      <div
        className="header__container"
        style={{ display: this.props.style, zIndex: 10 }}
      >

<div className={this.props.name} >
        <header className="basic__header">
          <div className="basic__header-content">
            <div className="header__content">
              <div className="left__content-icons">
                <div className="logo__container">
                  <div className="logo">
                    <NavLink
                      to={`/${this.state.lang}`}
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
                              xlinkHref={fire}
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
                  <div className='langcode'>
                  <ul>
                  <li className={'handleClicker ' + (this.state.isToggled ? 'visible': 'hidden')} onClick={this.handleClicker}><img src={controllerLang} alt=""/>
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 1417.3 1417.3" >
	<g id="XMLID_1_"  >
		<path className="st0" id="XMLID_22_" d="M1182.6,541.8c13.9,0,27.8,0,41.7,0c46.3,12.7,76.7,42.1,91.7,87.6c0,15.3,0,30.6,0,45.9
			c-11.5,39.7-39.1,64.9-72.7,87c-147.2,97-293.6,195.2-440.2,293c-63.4,42.3-111.8,42.3-175.1,0c-146.7-97.8-293-196.1-440.2-293.1
			c-33.6-22.1-61.4-47.1-72.8-86.9c0-15.3,0-30.6,0-45.9c15.1-45.4,45.5-74.8,91.7-87.6c13.9,0,27.8,0,41.7,0
			c20.4,11.2,41.7,21.1,61,33.8c130.2,86.1,260.1,172.6,389.7,259.6c12.3,8.3,20.4,8.4,32.8,0.1c122-82.1,244.3-163.8,367-244.8
			C1125.8,572.8,1154.6,558,1182.6,541.8z"/>
	</g>
</svg>
                   <ul className={(this.state.isToggled ? 'visible': 'hidden')}>
                         <li className={langClass('/en', `${location.pathname.substr(2)}`)} >
                         <a href={'/en' + `${location.pathname.substr(3)}`}><img alt="" src={EN}/></a>
                   </li>
                           <li className={langClass('/ru', `${location.pathname.substr(2)}`)}>
                          <a href={'/ru' + `${location.pathname.substr(3)}`}><img alt="" src={RU}/></a>
                   </li>
                           <li className={langClass('/pl', `${location.pathname.substr(2)}`)}>
                           <a href={'/pl' + `${location.pathname.substr(3)}`}><img alt="" src={PL}/></a>
                   </li>
                   </ul></li>
                 </ul>
              </div>
              </div>
              <div className="mid__content-logo">
                <nav className="mainnav">
                 <ul>

                   <li className="shining-underline">
                     <NavLink
                      to={`/${this.state.lang}/portfolio`}
                      className="link">
                          <Translate>Projects</Translate>
                       <span className="mainnavshine"></span>
                        </NavLink>
                   </li>
                     {/*<li>
                          <Translate>Services</Translate>
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
                               <Translate>E-commerce</Translate>
                             <span className="mainnavshine"></span>
                             </NavLink>
                         </li>
                     </ul>
                   </li>*/}
                   <li className="shining-underline">
                     <NavLink
                      to={`/${this.state.lang}/process`}
                      className="link">
                          <Translate>Process</Translate>
                       <span className="mainnavshine"></span>
                        </NavLink>
                   </li>
                  <li className="shining-underline">
                     <NavLink
                      to={`/${this.state.lang}/aboutus`}
                      className="link">
                          <Translate>About</Translate>
                        <span className="mainnavshine"></span>
                        </NavLink>
                   </li>
                   <li className="shining-underline">
                     <NavLink
                      to={`/${this.state.lang}/contactus`}
                      className="link">
                          <Translate>Contact Us</Translate>
                       <span className="mainnavshine"></span>
                        </NavLink>
                   </li>
                   <li className="ordernow" onClick={this.changePoppup}>
                      <div className="shining-underline">
                          <Translate>Order Now</Translate>
                            <span className="ordernowshine"></span>
                          </div>
                   </li>
                 </ul>
                </nav>

               {/*  <div className="check__work-sockets">
                  <div className="check__work" onClick={this.showMenu}>
                    <img src={GridIcon} width="15" />
                  </div>
                </div>
                */}

              </div>


              <div className="right__content-socials">
                <div className="social__icons">
                  <a
                    href="https://dishots.com/u/DSIDE"
                    className="social__icon-behance"
                    target="_blank" rel="noopener noreferrer"
                  > </a>
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href={
                      this.state.lang === "ru"
                        ? "https://www.instagram.com/dside.ru/"
                        : "https://www.instagram.com/dsidepl"
                    }
                    className="social__icon-instagram"
                  > </a>
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
</div>

        
          <OrderPoppup modalStatus={this.state.modalActiveOrder} onClose={this.changePoppup} />
       
      </div>
    );
  }
}
export default compose(
  withRouter,
  withDsideApi
)(Header, `/review/getReviewList/`);
