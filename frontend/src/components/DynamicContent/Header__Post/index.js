import React, { Component } from "react";
import "./index.css";
import {compose} from 'recompose'
// import zindex from './images/Header_zIndex.png'
import withDsideApi from "./../../../HOC/Fetch";
import PortolioPost from "./Portfolio__Post";
import {Link, withRouter} from 'react-router-dom'
import {browserHistory} from 'react-router'
import withLanguage from "../../../HOC/withLanguage";
import Translate from 'translate-components'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import  Arrow  from '../../Basic/Footer/arrow.svg';
import ScrollMagic from "../../scrollMagic";
import MorphSVGPlugin from 'gsap/MorphSVGPlugin'
import useLang from '../../../hooks/useLang'
import SplitText from 'gsap/SplitText'

export const wlang = {
    ru: "Свежие проекты",
    pl: "Najnowsze projekty",
    en: "Recent projects"
}
export const elang = {
    ru: "Портфолио",
    pl: "Portfolio",
    en: "Portfolio"
}
let glang = useLang(wlang);
let slang = useLang(elang);
let portallsplitcontent = slang;
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
    let portallsplit = '.allworks';
    const portSplit = new SplitText(portsplit, {type: "words, chars", wordsClass: "port-heading" });
    const portallSplit = new SplitText(portallsplit, {type: "words, chars", wordsClass: "port-all" });
	let portChars = portSplit.chars; // array of DOM elements (<div> tags)
	let portallChars = portallSplit.chars; // array of DOM elements (<div> tags)
    this.porthomeTl = new gsap.timeline();
    var trigger = '.hp-trig';
		this.porthomeTl
			.staggerFrom(portChars, .3, {y: 10, autoAlpha: 0}, .05)
			.from('#first', .5, {x: -300,  autoAlpha: 0}, "-=0")
			.from('#first', .5, {fill:'#c5c9e0'}, "-=.8")
			.staggerFrom(portallChars, .3, {y: 3, autoAlpha: 0}, .05)
            .from('.button_allworks', .4, {x: 10, autoAlpha: 0}, "-=.3");
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: trigger, triggerHook: .7, reverse: false})
                .setTween(this.porthomeTl)
                .addTo(controller);
  }
  scrollTo = ScrollToPlugin;
	 scrollNow() {
             gsap.to(window, .3, {scrollTo: 0, ease: 'Back.EaseOut'});
		     console.log('Clicked');
         setTimeout(
             function(){
            this.props.history.push(`/${this.props.activeLang}/portfolio`);
        }.bind(this), 200);
        // {`/${this.props.activeLang}/portfolio`}
	 }
  render() {

      return (
      <div>
        <div className="row hp-trig"><h2 className="hp-head">{portsplitcontent}</h2><span className="portline"><svg viewBox="0 0 600 50" >
            <path id="first" d="M591,24v1H8v-1H591z"/>
</svg></span><span className="allworks" onClick={() => this.scrollNow()}>{portallsplitcontent}<img className="button_allworks" src={Arrow} width={16} alt=""/></span></div>
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
