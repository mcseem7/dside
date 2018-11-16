import React, { Component, Fragment } from "react";
import PortfolioPost from "./Portfolio__Post";
import FirstImage from "./images/four__image.png";
import SecondImage from "./images/thumbs-02.jpg";
import ThirdImage from "./images/thumbs-03.jpg";
import FourImage from "./images/thumbs-04.jpg";
import FiveImage from "./images/thumbs-05.jpg";
import SixImage from "./images/case_3_d.jpg";
import "./index.css";
import iconGrid from "./images/icon__grid.svg";
import {compose} from 'recompose'
// import zindex from './images/Header_zIndex.png'
import About from "./../Main/About__block/index";
import withDsideApi from "./../../../HOC/Fetch";
import PortolioPost from "./Portfolio__Post";
import {withRouter} from 'react-router-dom'
import { LangContextConsumer } from "../Main";
import withLanguage from "../../../HOC/withLanguage";

class HeaderPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: ""
    };
  }

  componentDidMount() {
    this.setState({ lang: localStorage.getItem("lang") });
  }

  render() {
    
    return (
      <div>
        <section className="portfolio__posts">
          <div className="relative__content">
            <div className="content__posts">
              {this.props.loading ? (
                <PortolioPost lang={this.state.lang} {...this.props} />
              ) : null}
            </div>

            <div className="container__what" />
          </div>
        </section>

        <div className="what__about-content">
          <div className="block__load__more">
            <div className="load__more">
              <div className="more__icon" onClick={() => {
                 this.props.history.push(`${this.props.language}/portfolio`)
              }}>
            <button className="load">
            <img src={iconGrid} alt="" width="15" />
                  Load More
            </button>
              </div>
            </div>
          </div>

          <About />
        </div>
      </div>
    );
  }
}

export default compose ( withRouter, withLanguage, withDsideApi)(
  HeaderPost,
  `/portfolio/getHomePortfolioItems/`,
  "HOME"
);
