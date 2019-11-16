import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import {reactTranslateChangeLanguage} from 'translate-components'
import {TweenLite, TimelineLite, TextPlugin } from 'gsap/all'
import MorphSVGPlugin from '../../../../greensock/MorphSVGPlugin'
import SplitText from '../../../../greensock/SplitText'
import ScrollToPlugin from '../../../../greensock/ScrollToPlugin'
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
        this.rerunAnim = this.rerunAnim.bind(this);
        this.scrollNow = this.scrollNow.bind(this);
	}
	morphSVG = MorphSVGPlugin;
	componentDidMount() {
		const orSplit = new SplitText(nicesplit, {type: "words, chars", wordsClass: "wow++"});
		let littleChars = orSplit.chars; // array of DOM elements (<div> tags)
		let path = '.ld';
		let l = this.path.getTotalLength();
		this.homeTl = new TimelineLite({paused: true});
		this.homeTl
			.from('.c-1', 1, {y: '-600', delay: .1, ease: 'Bounce.easeOut'})
			.to("#gradientmyballs .stop1", 0, {stopColor: "#21243d"}, "-=1")
			.to("#gradientmyballs .stop2", 0, {stopColor: "#21243d"}, "-=1")
			.from('.c-2', .1, {opacity: '0'})
			.to('.c-1', .4, {x: '-250', ease: 'Power3.easeOut'})
			.to('.c-2', .4, {x: '250', ease: 'Power3.easeOut'}, "-=.4")
			.staggerFrom([littleChars, typer], .5, {x: 100, autoAlpha: 0}, .1, "-=.4")
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
			.to("#gradientmyballs .stop1", 0, {stopColor: "#EFAE9A"}, "-=0.6")
			.to("#gradientmyballs .stop2", 0, {stopColor: "#B5624C"}, "-=0.6")
			.to('.c-3,.c-4,.c-5,.c-6,.c-7,.c-8,.c-9', .6, {
				y: 330,
				transformOrigin: "100% 100%",
				ease: 'Bounce.easeOut',
				delay: .4
			}, "-=0.2")
			.to("#gradientmyballs .stop1", .3, {stopColor: "#21243d"}, "-=.8")
			.to("#gradientmyballs .stop2", .3, {stopColor: "#21243d"}, "-=1.2")
			.to(typer, .7, {text: plang[1], ease: 'Power3.EaseIn', delay: 1}, "-=1")
			.from("#c-10", .4, {
				scale: 0,
				transformOrigin: "center center",
				ease: 'Bounce.easeOut',
				autoAlpha: 0
			}, "+=0.4")
			.to(typer, .4, {text: plang[2], ease: 'Power3.EaseIn', delay: 1}, "-=.2")
			.to("#c-10", .2, {morphSVG: "#m-1", ease: 'Power3.EaseIn', delay: 1}, "-=.6")
			.to("#c-10", 3, {rotation: -20, ease: 'Power4.EaseIn'}, "-=.1")
			.to(typer, .7, {text: plang[3], ease: 'Power4.EaseIn'}, "-=0.4")
			.to("#c-10", 1, {y: 1200, opacity: 0, transformOrigin: "100% 100%", ease: 'Circ.easeInOut'},"-=1.5")
			.to('.c-3,.c-4,.c-5,.c-6,.c-7,.c-8,.c-9', 1, {
				y: 1200,
				opacity: 0,
				transformOrigin: "100% 100%",
				ease: 'Circ.easeInOut'
			}, "-=1.5")
			.from(".cb", 1, {
				y: -1000,
				rotation: -20,
				scale: 1.4,
				transformOrigin: "100% 100%",
				ease: 'Circ.easeInOut'
			}, "-=1.5")
			.to("#blur", .4, {attr: {stdDeviation: 2}, delay: .2}, "+=0")
			.to("#blur-1", .4, {attr: {stdDeviation: 8}}, "-=.4")
			.to("#blur-2", .4, {attr: {stdDeviation: 3}}, "-=.4")
			.to("#blur", .3, {attr: {stdDeviation: 6}, delay: .2}, "-=0")
			.to("#blur-1", .3, {attr: {stdDeviation: 2}}, "-=.3")
			.to("#blur-2", .3, {attr: {stdDeviation: 4}}, "-=.3")
			.to("#blur", .5, {attr: {stdDeviation: 3}, delay: .2}, "+=0")
			.to("#blur-1", .5, {attr: {stdDeviation: 3}}, "-=.5")
			.to("#blur-2", .5, {attr: {stdDeviation: 0}}, "-=.5")
			.to(typer, .8, {text: plang[4], ease: 'Power4.EaseIn'}, "-=0")
			.to("#blur-1, #blur", .3, {attr: {stdDeviation: 0},delay: .3}, "-=0")
			.to(".brand", .3, {autoAlpha: 0}, "-=.3")
			.to("#gradientmystars .stop1", 0, {stopColor: "#EFAE9A"}, "-=0.3")
			.to("#gradientmystars .stop2", 0, {stopColor: "#B5624C"}, "-=0.3")
			.to("#blur-2", .3, {attr: {stdDeviation: 5}}, "-=.3")
			.from(".l, .cf1, .cf2", .6, {autoAlpha: 0}, "-=.3")
			.to(".w1", .3, {scale: 1.4, delay: .5, ease: 'Bounce.EaseIn', transformOrigin: "50% 50%", yoyo: true, repeat: -1, repeatDelay: .5}, "-=0")
			.to(".cf1", .3, {x:108, y:44}, "-=.3")
			.to(".cf2", .3, {x:108, y:44}, "-=.1")
			.to(".w2", .3, {scale: 1.4, delay: .5, ease: 'Bounce.EaseIn', transformOrigin: "50% 50%", yoyo: true, repeat: -1, repeatDelay: .5}, "-=0")
			.to(".cf1", .6, {x:425, y:-35, delay: .3, ease: 'Power3.EaseInOut'}, "-=.3")
			.to(".cf2", .7, {x:425, y:-35, ease: 'Power3.EaseInOut'}, "-=.1")
			.fromTo(path, 3, {strokeDashoffset: l, ease: 'Linear.easeNone'}, {strokeDashoffset:0, repeat: -1, ease: 'Linear.easeNone'},"-=3")
			.to(".l", .3, {autoAlpha: 0, delay: .4}, "-=0")
			.to(".cb, .cf1, .cf2", .3, {scale: 0, ease: 'Bounce.easeOut', transformOrigin: "50% 50%"}, "-=0")
			.to(typer, 1.5, {text: plang[5], ease: 'Power4.EaseIn', delay: .4}, "-=0")
			.from(".r1", .5, {autoAlpha: 0, ease: 'Power4.EaseIn', delay: .6}, "-=0")
			.from(".controllers", 1, {autoAlpha: 0, y: 50, ease: 'Power4.EaseIn', delay: .3}, "-=0");
		let sdtl = new TimelineLite();
		sdtl
			.fromTo('.csd', 1, {y: '-10', autoAlpha: 0, ease: 'Bounce.easeOut', repeat: -1, repeatDelay:.5},{y: '30', delay: 5,autoAlpha: 1,  ease: 'Bounce.easeOut', repeat: -1, repeatDelay:.5});
	}

	componentDidUpdate() {
	if ( this.props.pageLoader !== true ) {
			this.homeTl.play();
		}
    }
	 rerunAnim() {
			 this.homeTl.restart();
	 }
	 scrollTo = ScrollToPlugin;
	 scrollNow() {
             TweenLite.to(window, 2, {scrollTo: 500});
		     console.log('Clicked');
	 }
    render() {

		return <div className="container">
			<div className="row">
			<div className="textEffect">
			  <div className="nicesplit">{nicesplitcontent}<span className="r1">.</span></div>
			</div>
			<div className="animeholder">
			<svg className="svg-intro" version="1.1" id="anime" x="0px" y="0px" viewBox="0 0 800 600" style={{'enable-background':'new 0 0 1920 1080;'}}>
            <radialGradient id="gradientmyballs" cx = "50%" cy = "50%" r = "50%" fx = "50%" fy = "25%">
         	 	<stop className="stop1" offset="0%" stopColor="#EFAE9A" />
         	 	<stop className="stop2" offset="100%" stopColor="#B5624C" />
       		</radialGradient>
			<radialGradient id="gradientmystars" cx = "50%" cy = "50%" r = "50%" fx = "50%" fy = "25%">
         	 	<stop className="stop1" offset="0%" stopColor="#EFAE9A" />
         	 	<stop className="stop2" offset="100%" stopColor="#B5624C" />
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
			<line className="l" x1="84.7" y1="187.1" x2="224" y2="310.3"/>
			<line className="l l1 ld" ref={(ref) => this.path = ref} x1="115.7" y1="265.1" x2="224" y2="310.3"/>
			<line className="l" x1="159.7" y1="416.1" x2="224" y2="310.3"/>
			<line className="l" x1="223.9" y1="310.3" x2="222.7" y2="219.1"/>
			<line className="l" x1="223.9" y1="310.3" x2="341.7" y2="169.1"/>
			<line className="l" x1="223.9" y1="310.3" x2="540.7" y2="229.1"/>
			<line className="l l1 ld" x1="224.9" y1="310.3" x2="440.7" y2="239.1"/>
			<line className="l" x1="522.7" y1="345.1" x2="540.7" y2="229.1"/>
			<circle className="cf1" cx="115.7" cy="265.1" r="2"/>
			<circle className="cf2" cx="115.7" cy="265.1" r="2"/>
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
			<circle className="c cb cf" filter="url(#blurInHard)" cx="224" cy="310" r="6.1"/>
			<circle className="c cb cf" filter="url(#blurInHard)" cx="540.7" cy="229.1" r="7.5"/>
			<circle className="c cb" filter="url(#blurIn)" cx="222.7" cy="219.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="341.7" cy="169.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="159.7" cy="416.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="605.7" cy="309.1" r="2.5"/>
			<circle className="c cb w1" filter="url(#blurIn)" cx="115.7" cy="265.1" r="3"/>
			<circle className="c cb" filter="url(#blurIn)" cx="440.7" cy="239.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="694.7" cy="373.1" r="1.9"/>
			<circle className="c cb" filter="url(#blurIn)" cx="295.7" cy="357.1" r="1"/>
			<circle className="c cb" filter="url(#blurIn)" cx="84.7" cy="187.1" r="1"/>
			<circle className="c cb" filter="url(#blurIn)" cx="310.7" cy="246.1" r="1"/>
			<circle className="c cb" filter="url(#blurIn)" cx="522.7" cy="345.1" r="2.4"/>
			<circle className="c cb" filter="url(#blurIn)" cx="415.7" cy="368.1" r="2.2"/>
			</g>
			<g>
			<path className="l" d="M540.7,229.1"/>
			<path className="l" d="M310.7,246.1"/>
			<line className="l" x1="295.7" y1="357.1" x2="415.7" y2="368.1"/>
			<path className="l" d="M522.7,345.1"/>
			<line className="l l1 ld" x1="605.7" y1="309.1" x2="540.7" y2="229.1"/>
			<path className="l" d="M694.7,373.1"/>
			<line className="l" x1="681.1" y1="262.4" x2="540.7" y2="229.1"/>
			<line className="l" x1="694.7" y1="373.1" x2="540.5" y2="229.1"/>
			</g>
			</svg>
			<div className="controllers">
				<div className="replay" onClick={() => this.rerunAnim()}>
					<svg viewBox="0 0 512 512" width={12}><path d="m437.089844 74.980469c-48.308594-48.351563-112.539063-74.980469-180.855469-74.980469-61.578125 0-120.164063 21.808594-166.527344 61.699219l-49.601562-48.738281-9.9375 168.507812 171.300781-12.667969-48.609375-45.027343c29.421875-23.101563 65.570313-35.667969 103.375-35.667969 92.492187 0 167.742187 75.316406 167.742187 167.894531s-75.25 167.898438-167.742187 167.898438c-42.464844 0-82.976563-15.917969-114.078125-44.816407-30.933594-28.75-49.796875-67.6875-53.109375-109.644531l-1.09375-13.816406h-87.953125l.949219 15.894531c8.066406 134.851563 120.199219 240.484375 255.285156 240.484375 68.316406 0 132.546875-26.628906 180.855469-74.980469 48.304687-48.351562 74.910156-112.640625 74.910156-181.019531s-26.605469-132.667969-74.910156-181.019531zm0 0"/></svg>Replay</div>
				<div className="scrollDown" onClick={() => this.scrollNow()}>
					<svg  viewBox="0 0 64 64" width={36}>
			<circle cx="31" className="csd" cy="20" r="4"/>
			<path d="M31.2,64h-0.5c-8.9,0-16.2-7.2-16.2-16.2V16.3c0-8.9,7.2-16.2,16.2-16.2h0.5c8.9,0,16.2,7.2,16.2,16.2v31.5
		C47.4,56.8,40.2,64,31.2,64z M30.7,2.2c-7.8,0-14.2,6.4-14.2,14.2v31.5c0,7.8,6.4,14.2,14.2,14.2h0.5c7.8,0,14.2-6.3,14.2-14.2
		V16.3c0-7.8-6.4-14.2-14.2-14.2H30.7z"/></svg>Scroll Down</div>
			</div>
			</div>
			</div>
		</div>;
  }
}


export default withRouter(Slider);