import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, withRouter } from "react-router-dom";
import Translate from "translate-components";
import homeDside from "./grade-items.png";
import moment from 'moment';
import gradeImg from './grade.svg'


 class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
               
        };
    }

    render() {
        const {history} = this.props
        return (
            <React.Fragment>      
                  <div
            className={`main__header ${this.props.activeLanding}`}
            style={{
              display: this.props.display,
              opacity: this.props.opacity,
              transition: "0.3s"
            }}
          >
          
            <div className="main__header-content">
              <div className="main__header-left">
                <div className="main__left-container">
                  <div className="menu__header-column">
                    <div className="menu__header-item">
                      <div className="description__menu-title">
                        <Link
                          onClick={() => this.props.handleShowMenu()}
                          exact
                          to={`/${this.props.language}/aboutus`}
                          className="link__menu"
                        >
                          <Translate>About Us</Translate>
                        </Link>
                        <div className="description__menu-title">
                        <p><Translate>Let's get to know each other better</Translate></p>
                        </div>
                      </div>
                    </div>
  
                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link
                         onClick={() => this.props.handleShowMenu()}
                          exact
                          to={`/${this.props.language}/contactus`}
                          className="link__menu"
                        >
                          <Translate>Contact Us</Translate>
                        </Link>
                        <div className="description__menu-title">
                         <p><Translate>Let's discuss business over coffee?</Translate></p>
                         </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="menu__header-column">
                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link
                         onClick={() => this.props.handleShowMenu()}
                          exact
                          to={`/${this.props.language}/blog`}
                          className="link__menu"
                        >
                          <Translate>Blog</Translate>
                        </Link>
                      <div className="description__menu-title">
                      <p><Translate>Thought stream for you</Translate></p>
                      </div>
                      </div>
                    </div>
  
                    <div className="menu__header-item">
                      <div className="menu__header-title">
                        <Link
                            onClick={() => this.props.handleShowMenu()}
                          exact
                          to={`/${this.props.language}/portfolio`}
                          className="link__menu"
                        >
                          <Translate>Portfolio</Translate>
                        </Link>
                        <div className="description__menu-title">
                        <p><Translate>See our previous experience</Translate></p>
                        </div>
                      </div>
                      {/*<div className="description__menu-title">*/}
                      {/*<p>Caption text under about us</p>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
                {/* <div className="menu__header-column"></div> */}
              </div>

              <div className="main__header-right">
              <div className="wrapper__main-head">
                <img src={homeDside} alt="" />
                <div className="dside__grades-container">
                  <div className="grades__titles">
                    <h3><Translate>Today in </Translate></h3>
                    <span className='grade_img-today'><img src={gradeImg} alt=""/></span>
                    <div className="add__grade-svg" onClick={() => this.props.handleChangePoppupGrade()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M27.31 4.69a16 16 0 1 0 0 22.63 16 16 0 0 0 0-22.63zm-21.56 21.56a14.5 14.5 0 1 1 20.51 0 14.52 14.52 0 0 1-20.51 0zm17.5-9.5h-6.5v6.5a.75.75 0 1 1-1.5 0v-6.5h-6.5a.75.75 0 0 1 0-1.5h6.5v-6.5a.75.75 0 0 1 1.5 0v6.5h6.5a.75.75 0 1 1 0 1.5z"
                          id="o_"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grades__head-items">
                    {this.props.gradeItem
                      .filter((i, index) => index < 3)
                      .map(grade => {
                        return (
                          <div className={"grade__head-item"} onClick={() => {
                           this.props.handleShowMenu();
                           history.push({
                             pathname: `/${this.props.language}/grade/${grade.id}`
                           })
                          }
                          }>
                            <div className="head-grade__img">
                              {/* <img
                                src={`${process.env.REACT_APP_DOMAIN}${
                                  grade.graded_by.avatar
                                }`}
                                alt=""
                              /> */}

                              <img
                                src={`${homeDside}`}
                                alt=""
                              />
                            </div>
                            <div className="head-grade__date">
                              <p>{moment(grade.date).format("D MMM")}</p>
                            </div>
                          </div>
                        );
                      })}

                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
                
            </React.Fragment>
        );
    }
}

export default withRouter(HeaderMenu)