import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import {reactTranslateChangeLanguage} from 'translate-components'
import TweenLite, { TimelineLite, TextPlugin } from 'gsap/all'
import MorphSVGPlugin from '../../../../greensock/MorphSVGPlugin'
import SplitText from '../../../../greensock/SplitText'
import useLang from '../../../../hooks/useLang'
import AttrPlugin from '../../../../greensock/AttrPlugin'
import './index.css'



export const slang = {
    ru: ["идеи","внимание","связь","бренды","сайты","ваше лицо"],
    pl: ["pomysły","uwagę","związek","marki","strony","Ciebie"],
    en: ["ideas","attention","connection","brands","websites","YOU"]
}
export const wlang = {
    ru: "Создаем идеи",
    pl: "Tworzymy pomysły",
    en: "We create ideas"
}
export const klang = {
	ru: ".wow2",
	pl: ".wow2",
	en: ".wow3"
}

let plang = useLang(slang);
let glang = useLang(wlang);
let msplitLang = useLang(klang);
let nicesplitcontent = glang;
let typer = msplitLang;
let nicesplit = '.nicesplit';

class Slider extends Component  {
  constructor(props){
		super(props);
	 	this.state = {
		loaderExists: true
        }
	}
	morphSVG = MorphSVGPlugin;
	componentDidMount() {
		const orSplit = new SplitText(nicesplit, {type: "words, chars", wordsClass: "wow++"});
		let littleChars = orSplit.chars; // array of DOM elements (<div> tags)
		let homeTl = new TimelineLite({paused: true});
		homeTl
			.from('.c-1', 1, {y: '-600', delay: .2, ease: 'Bounce.easeOut'})
			.to("#gradientmyballs .stop1", 0, {stopColor: "#21243d"}, "-=1")
			.to("#gradientmyballs .stop2", 0, {stopColor: "#21243d"}, "-=1")
			.from('.c-2', .1, {opacity: '0'})
			.to('.c-1', .4, {x: '-200', ease: 'Power3.easeOut'})
			.to('.c-2', .4, {x: '200', ease: 'Power3.easeOut'}, "-=.4")
			.staggerFrom(littleChars, .5, {x: 100, autoAlpha: 0}, .1, "-=.4")
			.to('.c-1', 1, {x: '-250', ease: 'Power3.easeOut'}, "-=1.4")
			.to('.c-2', 1, {x: '250', ease: 'Power3.easeOut'}, "-=1.4")
			.to('.c-1', .4, {x: '0', ease: 'Power4.easeIn'}, "-=0")
			.to('.c-2', .4, {x: '0', ease: 'Power4.easeIn'}, "-=0.4")
			.to('.c-2, .c-1', 0, {opacity: 0}, "-=0")
			.to('.sc', 0, {opacity: 1}, "-=0")
			.to(typer, 0, {text: plang[0], fontFamily: 'DSIDE-Bold'})
			.to('.c-3', .6, {x: 40, y: 120, ease: 'Power4.easeOut'}, "-=0")
			.to('.c-4', .6, {x: -80, y: -90, ease: 'Power4.easeOut'}, "-=0.6")
			.to('.c-5', .6, {x: 200, y: 40, ease: 'Power4.easeOut'}, "-=0.6")
			.to('.c-6', .6, {x: 100, y: -180, ease: 'Power4.easeOut'}, "-=0.6")
			.to('.c-7', .6, {x: -200, y: 110, ease: 'Power4.easeOut'}, "-=0.6")
			.to('.c-8', .6, {x: -70, y: -310, ease: 'Power4.easeOut'}, "-=0.6")
			.to('.c-9', .6, {x: 230, y: 150, ease: 'Power4.easeOut'}, "-=0.6")
			.to("#gradientmyballs .stop1", 0, {stopColor: "#EFAE9A"}, "-=0.5")
			.to("#gradientmyballs .stop2", 0, {stopColor: "#B5624C"}, "-=0.5")
			.to('.c-3,.c-4,.c-5,.c-6,.c-7,.c-8,.c-9', .6, {
				y: 330,
				transformOrigin: "100% 100%",
				ease: 'Bounce.easeOut',
				delay: .4
			}, "-=0.2")
			.to("#gradientmyballs .stop1", .3, {stopColor: "#21243d"}, "-=1")
			.to("#gradientmyballs .stop2", .3, {stopColor: "#21243d"}, "-=1")
			.to(typer, .4, {text: plang[1], ease: 'Power3.EaseIn', delay: 1}, "-=1")
			.from("#c-10", .4, {
				scale: 0,
				transformOrigin: "center center",
				ease: 'Bounce.easeOut',
				autoAlpha: 0
			}, "+=0.4")
			.to(typer, .4, {text: plang[2], ease: 'Power3.EaseIn', delay: 1}, "-=.2")
			.to("#c-10", .2, {morphSVG: "#m-1", ease: 'Power3.EaseIn', delay: 1}, "-=.6")
			.to("#c-10", 3, {rotation: -20, ease: 'Power4.EaseIn'}, "-=.1")
			.to(typer, .4, {text: plang[3], ease: 'Power4.EaseIn'}, "-=0")
			.to("#c-10", 1, {y: 600, transformOrigin: "100% 100%", ease: 'Circ.easeInOut'})
			.to('.c-3,.c-4,.c-5,.c-6,.c-7,.c-8,.c-9', 1, {
				y: 600,
				transformOrigin: "100% 100%",
				ease: 'Circ.easeInOut'
			}, "-=1")
			.from(".cb", 1, {
				y: -500,
				rotation: -20,
				scale: 1.4,
				transformOrigin: "100% 100%",
				ease: 'Circ.easeInOut'
			}, "-=1")
			.to("#blur", .4, {attr: {stdDeviation: 2}, delay: .2}, "+=0")
			.to("#blur-1", .4, {attr: {stdDeviation: 8}}, "-=.4")
			.to("#blur-2", .4, {attr: {stdDeviation: 3}}, "-=.4")
			.to("#blur", .3, {attr: {stdDeviation: 6}, delay: .2}, "-=0")
			.to("#blur-1", .3, {attr: {stdDeviation: 2}}, "-=.3")
			.to("#blur-2", .3, {attr: {stdDeviation: 4}}, "-=.3")
			.to("#blur", .5, {attr: {stdDeviation: 3}, delay: .2}, "+=0")
			.to("#blur-1", .5, {attr: {stdDeviation: 3}}, "-=.5")
			.to("#blur-2", .5, {attr: {stdDeviation: 0}}, "-=.5")
			.to(typer, .4, {text: plang[4], ease: 'Power4.EaseIn', delay: 1.5}, "-=0")
			.to("#blur-1, #blur", .3, {attr: {stdDeviation: 0}}, "-=0")
			.to(".brand", .3, {autoAlpha: 0}, "-=.3")
			.to("#blur-2", .3, {attr: {stdDeviation: 5}}, "-=.3")
			.from(".l", .3, {autoAlpha: 0}, "-=.3")
			.to(".l", .3, {autoAlpha: 0, delay: 5}, "-=.3")
			.to(".cb", .3, {scale: 0, ease: 'Bounce.easeOut', transformOrigin: "50% 50%"}, "-=.1")
			.to(typer, 1, {text: plang[5], ease: 'Power4.EaseIn', delay: .4}, "-=0")
	}

    render() {
console.log('update', this);
		return <div className="container">
			<div className="row">
			<div className="textEffect">
			  <div className="nicesplit">{nicesplitcontent}</div>
			</div>
			<div className="animeholder">
			<svg className="svg-intro" version="1.1" id="anime" x="0px" y="0px" viewBox="0 0 800 600" style={{'enable-background':'new 0 0 1920 1080;'}}>
            <radialGradient id="gradientmyballs" cx = "50%" cy = "50%" r = "50%" fx = "50%" fy = "25%">
         	 	<stop className="stop1" offset="0%" stop-color="#EFAE9A" />
         	 	<stop className="stop2" offset="100%" stop-color="#B5624C" />
       		</radialGradient>
			<g className="wink">
				<circle className="c-1 c" cx="400" cy="260" r="5"/>
			    <circle className="c-2 c" cx="400" cy="260" r="5"/>
				<circle className="c-3 c sc" cx="400" cy="260" r="3"/>
				<circle className="c-4 c sc" cx="400" cy="260" r="1.5"/>
				<circle className="c-5 c sc" cx="400" cy="260" r="4"/>
				<circle className="c-6 c sc" cx="400" cy="260" r="6"/>
				<circle className="c-7 c sc" cx="400" cy="260" r="3"/>
				<circle className="c-8 c sc" cx="400" cy="260" r="5"/>
				<circle className="c-9 c sc"cx="400" cy="260" r="1"/>
			</g>
			<g>
				<path id="c-10" className="c" d="M392.5,180a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0"/>
                <path id="m-1" className="c" d="M504.4,180.2c-1.3,0-2.6,0.5-3.4,1.4c0,0,0.1,0,0.1,0c0,0,0,0,0,0c-0.3,0.3-2.4,2.4-5.9,2.4h-18.5h-0.1
	H305.8c-2.9,0-4.8-1.5-5.6-2.2c-0.9-1-2.2-1.7-3.6-1.7c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7c1.4,0,2.7-0.5,3.6-1.5
	c0.9-0.7,3.1-2.2,6.4-2.2h170h0.1h17.7c4.4,0,6.8,2.5,6.8,2.5l0-0.1c0.8,0.8,2,1.3,3.2,1.3c2.6,0,4.7-2.1,4.7-4.7
	S507,180.2,504.4,180.2z"/>
				<path id="m-2" className="c" d="M409.6,180.2c-1.3,0-2.6,0.5-3.4,1.4c0,0,0.1,0,0.1,0c0,0,0,0,0,0c-0.3,0.3-2.4,2.3-5.7,2.4H399
	c-2.9,0-4.8-1.5-5.6-2.2c-0.9-1-2.2-1.7-3.6-1.7c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7c1.4,0,2.7-0.5,3.6-1.5
	c0.9-0.7,3.1-2.2,6.4-2.2h1.1c3.6,0.4,5.7,2.5,5.7,2.5l0-0.1c0.8,0.8,2,1.3,3.2,1.3c2.6,0,4.7-2.1,4.7-4.7S412.3,180.2,409.6,180.2z
	 M400.9,332L400.9,332C400.9,332,400.9,332,400.9,332C400.9,332,400.9,332,400.9,332z" />
				 <path id="m-3" className="c" d="M404.8,180c-2-0.6-4.2,0.4-4.8,2.4c-0.7-2-2.8-3.1-4.8-2.4c-2,0.7-3.1,2.8-2.5,4.9c0.6,1.9,6.5,7.1,7.2,7.1
		c0.8,0,6.7-5.2,7.4-7.1C408,182.8,406.9,180.7,404.8,180z"/>
			</g>
			<g>
			<filter id="blurIn"  x="-300%" y="-300%" width="700%" height="700%">
    			<feGaussianBlur id="blur" in="SourceGraphic" stdDeviation="2"  />
  			</filter>
			<filter id="blurInHard" x="-100%" y="-100%" width="300%" height="300%">
    			<feGaussianBlur id="blur-1" in="SourceGraphic" stdDeviation="6"  />
  			</filter>
			<filter id="blurInEasy" x="-100%" y="-100%" width="300%" height="300%">
    			<feGaussianBlur id="blur-2" in="SourceGraphic" stdDeviation="4"  />
  			</filter>
			<path className="c cb brand" filter="url(#blurInEasy)" d="M400,200.2c0.3-0.2,0.3-0.6,0.2-1c-0.1-0.3-0.4-0.6-0.7-0.6l-3.1-0.5c-0.1,0-0.2-0.1-0.3-0.2l-1.4-2.8
	c-0.2-0.3-0.5-0.5-0.8-0.5c-0.4,0-0.7,0.2-0.8,0.5l-1.4,2.8c-0.1,0.1-0.2,0.2-0.3,0.2l-3.1,0.5c-0.4,0.1-0.6,0.3-0.7,0.6
	c-0.1,0.3,0,0.7,0.2,1l2.3,2.2c0.1,0.1,0.1,0.2,0.1,0.4l-0.5,3.1c0,0.3,0,0.5,0.2,0.8c0.3,0.3,0.8,0.4,1.1,0.2l2.8-1.5
	c0.1-0.1,0.3-0.1,0.4,0l2.8,1.5c0.1,0.1,0.3,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.2-0.5,0.2-0.8l-0.5-3.1
	c0-0.1,0-0.3,0.1-0.4L400,200.2z"  x="400" y="180" />
			<circle className="c cb" filter="url(#blurIn)" cx="681.1" cy="262.4" r="3.9"/>
			<circle className="c cb cf" filter="url(#blurInHard)" cx="223.9" cy="310.3" r="6.1"/>
			<circle className="c cb cf" filter="url(#blurInHard)" cx="540.7" cy="229.1" r="7.5"/>
			<circle className="c cb" filter="url(#blurIn)" cx="222.7" cy="219.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="341.7" cy="169.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="159.7" cy="416.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="605.7" cy="309.1" r="2.5"/>
			<circle className="c cb" filter="url(#blurIn)" cx="115.7" cy="265.1" r="3"/>
			<circle className="c cb" filter="url(#blurIn)" cx="440.7" cy="239.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="694.7" cy="373.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="295.7" cy="357.1" r="1"/>
			<circle className="c cb" filter="url(#blurIn)" cx="84.7" cy="187.1" r="1"/>
			<circle className="c cb" filter="url(#blurIn)" cx="310.7" cy="246.1" r="1"/>
			<circle className="c cb" filter="url(#blurIn)" cx="522.7" cy="345.1" r="2.4"/>
			<circle className="c cb" filter="url(#blurIn)" cx="415.7" cy="368.1" r="2.2"/>
			</g>
			<g>
			<line className="l" x1="84.7" y1="187.1" x2="224" y2="310.3"/>
			<line className="l l1" x1="115.7" y1="265.1" x2="224" y2="310.3"/>
			<line className="l" x1="159.7" y1="416.1" x2="224" y2="310.3"/>
			<line className="l" x1="223.9" y1="310.3" x2="222.7" y2="219.1"/>
			<line className="l" x1="223.9" y1="310.3" x2="341.7" y2="169.1"/>
			<line className="l" x1="223.9" y1="310.3" x2="540.7" y2="229.1"/>
			<line className="l l1" x1="224.9" y1="310.3" x2="440.7" y2="239.1"/>
			<line className="l" x1="522.7" y1="345.1" x2="540.7" y2="229.1"/>
			<path className="l" d="M540.7,229.1"/>
			<path className="l" d="M310.7,246.1"/>
			<line className="l" x1="295.7" y1="357.1" x2="415.7" y2="368.1"/>
			<path className="l" d="M522.7,345.1"/>
			<line className="l l1" x1="605.7" y1="309.1" x2="540.7" y2="229.1"/>
			<path className="l" d="M694.7,373.1"/>
			<line className="l" x1="681.1" y1="262.4" x2="540.7" y2="229.1"/>
			<line className="l" x1="694.7" y1="373.1" x2="540.5" y2="229.1"/>
			</g>
			</svg>
			</div>
			</div>
		</div>;
  }
}


export default withRouter(Slider);