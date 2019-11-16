import React, { Component } from "react";
import "./index.css";
import {compose} from 'recompose'
// import zindex from './images/Header_zIndex.png'
import withDsideApi from "./../../../HOC/Fetch";
import PortolioPost from "./Portfolio__Post";
import {withRouter} from 'react-router-dom'
import withLanguage from "../../../HOC/withLanguage";
import Translate from 'translate-components'
import { TimelineLite } from 'gsap/all'
import ScrollMagic from "../../scrollMagic";
import MorphSVGPlugin from '../../../greensock/MorphSVGPlugin'
import useLang from '../../../hooks/useLang'
import SplitText from '../../../greensock/SplitText'

export const wlang = {
    ru: "Свежие проекты",
    pl: "Najnowsze projekty",
    en: "Recent projects"
}
let glang = useLang(wlang);
let portsplitcontent = glang;

class HeaderPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: ""
    };
  }

morphSVG = MorphSVGPlugin;
  componentDidMount() {
    let portsplit = '.hp-head';
    const portSplit = new SplitText(portsplit, {type: "words, chars", wordsClass: "port-heading" });
	let portChars = portSplit.words; // array of DOM elements (<div> tags)
    this.porthomeTl = new TimelineLite();
    var trigger = '.hp-trig';
		this.porthomeTl
			.staggerFrom(portChars, .5, {x: 50, autoAlpha: 0}, .1);
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: trigger, triggerHook: .7, reverse: false})
                .setTween(this.porthomeTl)
                .addTo(controller);
  }

  render() {

    return (
      <div>
        <div className="row hp-trig"><h2 className="hp-head">{portsplitcontent}</h2></div>
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
