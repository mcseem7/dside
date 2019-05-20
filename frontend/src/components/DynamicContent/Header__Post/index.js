import React, { Component } from "react";
import "./index.css";
import {compose} from 'recompose'
// import zindex from './images/Header_zIndex.png'
import withDsideApi from "./../../../HOC/Fetch";
import PortolioPost from "./Portfolio__Post";
import {withRouter} from 'react-router-dom'
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
          </div>
        </section>
      </div>
    );
  }
}

export default compose ( withRouter, withLanguage, withDsideApi)(
  HeaderPost,
  `/portfolio/getHomePortfolioItems/`,
  "HOME"
);
