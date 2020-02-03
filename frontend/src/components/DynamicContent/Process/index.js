import React, { Component, Fragment } from 'react'
import './index.css'
import Helmet from 'react-helmet-async'
import  Arrow  from '../../Basic/Footer/arrow.svg';
import Ad  from '../Main/About__block/chess.png';
import ScrollMagic from "../../scrollMagic";
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import EasePack from 'gsap/EasePack'
import gsap from 'gsap'
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Footer from '../../Basic/Footer';


class Process extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
   window.scrollTo(0, 0);

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, EasePack );

gsap.set(".ball", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});

var Elastic = 'elastic.out(2.5, 1)';

var action = gsap.timeline({defaults:{ease:"none"}})
.from(".theLine", {drawSVG:0, duration:1},0)
.to(".texts01", {autoAlpha:1, y:10,  ease:Elastic, duration:0.35},0.00)// start = scene progress
.to(".theLine", {stroke: '#c5c9e0', ease:Elastic, duration:0.05},0.105)
.to(".ball03", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.05},0.195)
.from(".kbm", {autoAlpha:0, scale:0, transformOrigin:'center', ease:Elastic, duration:0.01},0.203)
.to(".k1", {x:5, y: -16, transformOrigin:'center', ease:'power3.in', duration:0.01},0.200)
.to(".k2", {y: 10, x: -14, transformOrigin:'center', ease:'power3.in', duration:0.01},0.200)
.to(".k3", {y: -9, x: -9, transformOrigin:'center', ease:'power3.in', duration:0.01},0.200)
.to(".k4", {y: -6, x: 24, transformOrigin:'center', ease:'power3.in', duration:0.01},0.200)
.to(".k5", {y: 12, x: 7, transformOrigin:'center',ease:'power3.in', duration:0.01},0.200)
.to(".xabsolute", {background: '#0d0e18', ease:Elastic, duration:0.12},0.186)
.to(".theLine", {stroke: 'url(#gradientmyballs)', ease:Elastic, duration:0.05},0.195)
.to(".texts02", {autoAlpha:1, y:-60, ease:Elastic, duration:0.35},0.195)
.to(".ball04", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.05},0.337)
.to(".xabsolute", {background: 'transparent', ease:Elastic, duration:0.12},0.306)
.to(".theLine", {stroke: '#21243d', ease: 'power3.in', duration:0.05},0.306)
.to(".texts03", {autoAlpha:1, y:10, ease:Elastic, duration:0.35},0.317)
.to(".ball05, .text03", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.05},0.43)
.from(".tx5", {yPercent: -500, autoAlpha: 0, ease:Elastic, duration:0.07, stagger: 0.004},0.317)
.to(".texts04", {autoAlpha:1, y:10, ease:Elastic, duration:0.35},0.43)
.from(".brick", {x: -70, autoAlpha: 0, transformOrigin:'center',ease:'power3.in', duration:0.01},0.460)
.to(".ball06, .text03", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.05},0.607)
.to(".theLine", {stroke: '#c5c9e0', ease:'back.in', duration:0.05},0.466)
.to(".texts05", {autoAlpha:1, y:10, ease:Elastic, duration:0.35},0.604)
.from(".check", {drawSVG:0, duration:0.01},0.620)
.to(".ball07, .text03", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.05},0.710)
.to(".texts06", {autoAlpha:1, y:10, ease:Elastic, duration:0.35},0.710)
.to(".ball08, .text03", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.05},0.794)
.to(".texts07", {autoAlpha:1, y:10, ease:Elastic, duration:0.35},0.790)
.from(".switch", {drawSVG:0, duration:0.01},0.719)
.to(".switch", {rotate: 55, transformOrigin:'right top', duration:0.01},0.73)
.from(".arrow", {x: -100, autoAlpha: 0, transformOrigin:'center',ease:'power3.in', duration:0.01},0.827)
.to(".ball09, .text03", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.05},0.892)
.from(".gear1, .gear2", {drawSVG:0, duration:0.01},0.905)
.to(".texts08", {autoAlpha:1, y:10, ease:Elastic, duration:0.35},0.894);

var Controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#svg",
  duration:5000,
  triggerHook: 0.5, // mid of viewport
})
.setTween(action)
//.addIndicators()
.addTo(Controller)

// ===== helper to time BALL, TEXT ================
var rolling = gsap.timeline({defaults:{ease:"none"}})
.from(".gear1", {rotate:360, repeat:-1, transformOrigin: 'center', duration:5},0)
.from(".gear2", {rotate:-360, repeat:-1, transformOrigin: 'center', duration:5},0)

scene.on("progress", function (event) {
    console.log("Scene progress: " + event.progress);
});


  }


 render() {
    return (
         <div>
            <div className="row">
<div className="processholder">
<div className="processitem texts01">
    <h2>Analytics</h2>
    <p>We thoroughly study the tasks of the business, the desires and needs of users and formulate the strategy of optimal solutions for every specific project.</p>
    <div className="proto">
       <div className="section-bottom">
       <div className="section-left">
       <h5>we do</h5>
       <ul className="wedo">
          <li>Market analysis</li>
          <li>Competitor analysis</li>
          <li>Description of the functional</li>
          <li>Users analysis</li>
          <li>Project specification</li>
       </ul>
       </div>
       <div className="section-right">
        <h5>team</h5>
       <ul className="team">
          <li>Business analyst</li>
          <li>Project manager</li>
       </ul>
       </div>
       </div>
    </div>
</div>
<div className="processitem texts02">
    <h2>Design</h2>
    <p>We create a spectacular design that performs specific tasks. Experience is in every form, and the message for your client’s brain to act is in every color.</p>
    <div className="proto">
       <div className="section-bottom">
       <div className="section-left">
       <h5>we do</h5>
       <ul className="wedo">
          <li>Site structure and map</li>
          <li>Logo and corporate identity</li>
          <li>Responsive Web Design</li>
          <li>Website prototypes</li>
          <li>Printed and promo products</li>
          <li>Motion graphics</li>
       </ul>
       </div>
       <div className="section-right">
        <h5>team</h5>
       <ul className="team">
          <li>Art Director</li>
          <li>UX/UI designer</li>
          <li>Graphic designer</li>
       </ul>
       </div>
    </div>
    </div>
</div>
<div className="processitem texts03">
    <h2>Development</h2>
    <p>Admit it, speed is important. Especially when your client has an average of three seconds to decide. That is why our applications work instantly.</p>
    <div className="proto">
        <div className="section-bottom">
       <div className="section-left">
       <h5>we do</h5>
       <ul className="wedo">
          <li>System architecture design</li>
          <li>Backend on CMS or custom</li>
          <li>Project logic and interactions</li>
          <li>Frontend</li>
          <li>Layouts</li>
       </ul>
       </div>
       <div className="section-right">
        <h5>team</h5>
       <ul className="team">
          <li>Systems architect</li>
          <li>Backend dev</li>
          <li>Frontend dev</li>
          <li>Markup</li>
           </ul>
       </div>
       </div>
    </div>
</div>
    <div className="processitem texts04">
    <h2>Integration</h2>
    <p>We connect existing services and applications that send or receive data from the Internet. We ensure the security of these connections.</p>
    <div className="proto">
        <div className="section-bottom">
       <div className="section-left">
       <h5>we do</h5>
       <ul className="wedo">
          <li>CRM & ERP Systems</li>
          <li>Payment systems</li>
          <li>Delivery systems</li>
          <li>Accounting systems</li>
          <li>Other integrations</li>
          </ul>
       </div>
       <div className="section-right">
        <h5>team</h5>
       <ul className="team">
          <li>Full-stack dev</li>
          <li>Backend dev</li>
           </ul>
           </div>
       </div>
    </div>
    </div>
    <div className="processitem texts05">
    <h2>Testing</h2>
    <p>Nobody likes to do the work twice, so we test our code at every stage of development. Launching a holistic product in alert state.</p>
    <div className="proto">
       <div className="section-bottom">
       <div className="section-left">
       <h5>we do</h5>
       <ul className="wedo">
          <li>Manual testing</li>
          <li>Automatic testing</li>
          <li>A / B testing</li>
          <li>Load testing</li>
          <li>Security testing</li>
           </ul>
       </div>
       <div className="section-right">
        <h5>team</h5>
       <ul className="team">
          <li>QA Automation Engineer</li>
          <li>QA Engineer</li>
           </ul>
       </div>
       </div>
    </div>
    </div>
    <div className="processitem texts06">
    <h2>Launching</h2>
    <p>We do not leave our customers to fend for themselves after the end of the development, and teach how to use the tools effectively.</p>
    <div className="proto">
       <div className="section-bottom">
       <div className="section-left">
       <h5>we do</h5>
       <ul className="wedo">
          <li>Domain and hosting</li>
          <li>Cloud storage</li>
          <li>Server scaling</li>
          <li>Setting up a version control system</li>
           </ul>
       </div>
        <div className="section-right">
        <h5>team</h5>
       <ul className="team">
          <li>System Administrator</li>
          <li>Devops Engineer</li>
       </ul>
       </div>
       </div>
    </div>
    </div>
    <div className="processitem texts07">
    <h2>Marketing</h2>
    <p>After creating and launching a project, we provide a growth strategy, as well as making it recognizable and beloved among your customers.</p>
    <div className="proto">
       <div className="section-bottom">
       <div className="section-left">
       <h5>we do</h5>
       <ul className="wedo">
          <li>SEO</li>
          <li>CPA marketing</li>
          <li>Display advertising</li>
          <li>Contextual marketing</li>
          <li>Email marketing</li>
          <li>User Behavior Analysis (GA)</li>
           </ul>
       </div>
       <div className="section-right">
        <h5>team</h5>
       <ul className="team">
          <li>SEO Specialist</li>
          <li>Email Marketing Specialist</li>
          <li>Copywriter</li>
          </ul>
       </div>
    </div>
    </div>
    </div>
    <div className="processitem texts08">
    <h2>Support</h2>
    <p>We ensure the stable operation of the project without failures and errors, as well as update all security patches.</p>
    <div className="proto">
       <div className="section-bottom">
       <div className="section-left">
       <h5>we do</h5>
       <ul className="wedo">
          <li>Bug fixes</li>
          <li>Design update</li>
          <li>Layout update</li>
          <li>Security patches update</li>
           </ul>
       </div>
       <div className="section-right">
        <h5>team</h5>
       <ul className="team">
          <div>All the above</div>
           </ul>
       </div>
    </div>
    </div>
    </div>
</div>
<svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 2200">
  <radialGradient id="gradientmyballs" cx = "50%" cy = "50%" r = "50%" fx = "50%" fy = "25%">
         	 	<stop className="stop1" offset="0%" stopColor="#EFAE9A" />
         	 	<stop className="stop2" offset="100%" stopColor="#B5624C" />
       		</radialGradient>
  <path className="switch" d="M183.8,1424.1l-8,6.3c0,0-1.2,1.1-2-0.1c-0.8-1.2,0.6-1.9,0.6-1.9l8.8-5.1"/>
  <polygon className="switchermask" points="186.5,1437.9 181.1,1430.9 181.1,1415.7 186.5,1409.6 "/>
  <path className="theLine" d="M232.8-0.3V75c0,19.6,15.9,35.5,35.5,35.5l50.2-7.1l11.3,11.2l18.8-23.2l16.5,5.9l16.9-25
	l9.7,37.8l53.2,0.3c19.6,0,35.5,15.9,35.5,35.5v15.5V248c0,19.6-15.9,35.5-35.5,35.5H154c-19.6,0-35.5,15.9-35.5,35.5v135
	c0,19.6,15.9,35.5,35.5,35.5h102c19.6,0,35.5,15.9,35.5,35.5v0c0,19.6-6.3,55.5,35.5,55.5h123c19.6,0,35.5,15.9,35.5,35.5v124
	c0,19.6-15.9,35.5-35.5,35.5H152c-19.6,0-35.5,15.9-35.5,35.5v44.3c0,1.8-1.5,3.3-3.3,3.3l-34.3,0.3c-1.8,0-3.3,1.5-3.3,3.3v6.8
	c0,1.8,1.5,3.3,3.3,3.3l34.4,0.5c1.8,0,3.3,1.5,3.3,3.3v12.3c0,1.8-1.5,3.3-3.3,3.3l-55.3,0c-1.8,0-3.3,1.5-3.3,3.3v7.8
	c0,1.8,1.5,3.3,3.3,3.3h55.3c1.8,0,3.3,1.5,3.3,3.3V956c0,19.6,15.9,35.5,35.5,35.5h120c19.6,0,35.5,15.9,35.5,35.5v75
	c0,19.6,15.9,35.5,35.5,35.5h107c19.6,0,35.5,15.9,35.5,35.5v47.1h-1.9c-6.1,0-11,5-11,11.1l0,0c0.1,6,4.9,10.8,10.9,10.8l1.9,0v46
	c0,19.6-15.9,35.5-35.5,35.5H222c-19.6,0-35.5,15.9-35.5,35.5v50.6l-5.4,6.1v15.2l5.4,7v57.1c0,19.6,15.9,35.5,35.5,35.5h157
	c19.6,0,35.5,15.9,35.5,35.5v148c0,19.6-15.9,35.5-35.5,35.5H138c-19.6,0-35.5,15.9-35.5,35.5v141c0,19.6,15.9,35.5,35.5,35.5h125
	c19.6,0,35.5,15.9,35.5,35.5v102.2"/>
<g>
	<path className="apple" d="M483.1,1644.2c-0.6-1.9-1.8-3.3-3.4-4.1c-0.8-0.4-1.7-0.6-2.6-0.6c-0.8,0-1.7,0.2-2.5,0.5
			c-0.4,0.2-0.8,0.3-1.2,0.3l-0.3,0.1l0,0c-0.1,0,0,0,0,0c0,0,0,0,0,0v0l-0.5,0c-0.4-0.1-0.9-0.2-1.4-0.3c-0.8-0.3-1.7-0.5-2.5-0.5
			c-0.9,0-1.8,0.2-2.6,0.6c-1.6,0.8-2.8,2.2-3.4,4.1c-1.5,4.5,0.9,10.3,4,13.1c0.8,0.7,1.6,1.1,2.5,1.1c0.6,0,1.2-0.2,1.8-0.5
			c0.6-0.3,1.3-0.5,1.9-0.5c0.7,0,1.3,0.2,2,0.5c0.6,0.3,1.2,0.5,1.8,0.5c0.9,0,1.8-0.4,2.6-1.1
			C482.2,1654.5,484.6,1648.7,483.1,1644.2z M478.7,1656.8c-0.7,0.6-1.4,0.9-2.1,0.9c-0.5,0-1-0.1-1.5-0.4c-0.7-0.4-1.5-0.6-2.2-0.6
			l0,0l0,0c-0.8,0-1.5,0.2-2.2,0.6c-0.5,0.3-1,0.4-1.5,0.4c-0.7,0-1.4-0.3-2.1-0.9c-2.9-2.7-5.1-8.4-3.8-12.4c0.6-1.7,1.7-3,3.1-3.7
			c0.7-0.3,1.5-0.5,2.3-0.5c0.7,0,1.5,0.1,2.2,0.4c0.7,0.3,1.4,0.4,2,0.4c0.7,0,1.3-0.2,2-0.4c0.7-0.3,1.5-0.4,2.2-0.4
			c0.8,0,1.6,0.2,2.3,0.5c1.4,0.7,2.5,2,3.1,3.7C483.8,1648.5,481.6,1654.1,478.7,1656.8z"/>
	<path className="apple" d="M478.8,1631.8l0-0.3l-0.3,0c-0.2,0-4.3,0.8-5.8,3.4c-0.6,1.1-0.7,2.4-0.1,3.7l0.1,0.2l0.2-0.1
			c0.1,0,1.6-0.5,3.1-1.6c1.9-1.4,2.8-3.1,2.8-5C478.8,1632.1,478.8,1631.9,478.8,1631.8z M478.2,1632.4c-0.1,3.5-3.9,5.3-5,5.7
			l-0.1,0.1l0-0.1c-0.1-0.4-0.2-0.8-0.2-1.2c0-0.6,0.1-1.1,0.4-1.6c1-1.8,3.7-2.7,4.8-3l0.2,0L478.2,1632.4z"/>
</g>
<g >
	<path className="arrow" d="M504.6,1648.9l-7.7-2.8l0.5,2.3h-40h-0.6h-3.1c-0.8-0.5-4.2-2.5-5.8-2.5
		c-1.2,0-1.9,0.9-1.9,1.7c0,0.3,0.1,0.5,0.2,0.8h-1.8v1h1.8c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.9,0.6,1.7,1.9,1.7c1.6,0,5-2,5.8-2.5h3.1
		h0.6h40l-0.5,2.3L504.6,1648.9z M498.3,1647.7l3.2,1.2l-3.2,1.2l0.3-1.2L498.3,1647.7z M447.9,1650.9c-0.9,0-1-0.8-0.6-1.2
		c0.2-0.2,0.5-0.3,0.9-0.3h3.4C450.3,1650.1,448.7,1650.9,447.9,1650.9z M448.2,1648.4c-0.4,0-0.7-0.1-0.9-0.3
		c-0.4-0.4-0.3-1.2,0.6-1.2c0.8,0,2.4,0.8,3.7,1.5H448.2z"/>
</g>
<path className="applebg" d="M468.9,1641c0,0,5.2,3.5,4.4,7.8c-0.8,4.2,0.7,5.6,1.7,5.6c1,0,5.5,2.8,2,2.8l1.9-1l2.5-2.2
	l2-4.9l-0.6-5.1l-2.8-3l-7.3,1.1L468.9,1641z"/>
<path className="apple" d="M479.1,1657.3c-0.5,0.5-1.1,0.8-1.7,1c0.2-0.2,0.1-0.5,0.2-0.8c0.3-0.2,0.7-0.4,0.9-0.6
		c3-2.7,5.3-8.3,3.9-12.5c-0.6-1.7-1.5-3-3-3.7c-0.4-0.2-1.1-0.4-1.6-0.5c-0.1-0.2-0.1-0.5-0.2-0.7c0.7,0.1,1.3,0.3,2,0.5
		c1.6,0.8,2.8,2.2,3.4,4.1C484.6,1648.7,482.2,1654.5,479.1,1657.3z"/>
  <path className="brick" d="M110.6,888.3H72.4c-1.4,0-2.6-1.2-2.6-2.6v-6.5c0-1.4,1.2-2.6,2.6-2.6h38.2
	c1.4,0,2.6,1.2,2.6,2.6v6.5C113.1,887.2,112,888.3,110.6,888.3z"/>
  <polyline className="check" points="479.3,1228.4 484,1234.5 497.1,1221.5 "/>
  <g>
  <text transform="matrix(1 0 0 1 498.3153 669.4435)"><tspan x="0" y="0" className="tx5">1</tspan><tspan x="0.3" y="8.4" className="tx5">*</tspan><tspan x="-0.1" y="16.8" className="tx5">Z</tspan><tspan x="0" y="25.2" className="tx5">3</tspan><tspan x="0" y="33.6" className="tx5">6</tspan><tspan x="0" y="42" className="tx5">8</tspan></text>
<text transform="matrix(1 0 0 1 505.4965 659.4435)"><tspan x="0" y="0" className="tx5">9</tspan><tspan x="-0.3" y="8.4" className="tx5">A</tspan><tspan x="-0.1" y="16.8" className="tx5">B</tspan><tspan x="-0.5" y="25.2" className="tx5">N</tspan><tspan x="0.1" y="33.6" className="tx5">#</tspan><tspan x="0" y="42" className="tx5">5</tspan></text>
<text transform="matrix(1 0 0 1 512.811 688.8964)"><tspan x="0" y="0" className="tx5">&amp;</tspan><tspan x="0.5" y="8.4" className="tx5">L</tspan><tspan x="-0.1" y="16.8" className="tx5">U</tspan><tspan x="0" y="25.2" className="tx5">A</tspan></text>
<text transform="matrix(1 0 0 1 519.233 676.4429)"><tspan x="0" y="0" className="tx5">D</tspan><tspan x="0.6" y="8.4" className="tx5">S</tspan><tspan x="1.5" y="16.8" className="tx5">I</tspan><tspan x="0" y="25.2" className="tx5">D</tspan><tspan x="0.6" y="33.6" className="tx5">E</tspan></text>
  </g>
  <circle className="kbm k1" cx="120" cy="338" r="0.7"/>
  <circle className="kbm k2" cx="120" cy="338" r="1.4"/>
  <circle className="kbm k3" cx="120" cy="338" r="1"/>
  <circle className="kbm k4" cx="120" cy="338" r="1.6"/>
  <circle className="kbm k5" cx="120" cy="338" r="1.2"/>
  <circle className="ball ball03 kc" cx="120" cy="338"/>
  <circle className="ball ball04" cx="487" cy="694"/>
  <circle className="ball ball05" cx="118" cy="824"/>
  <circle className="ball ball06" cx="487" cy="1174"/>
  <circle className="ball ball07" cx="188" cy="1374"/>
  <circle className="ball ball08" cx="416" cy="1584"/>
  <circle className="ball ball09" cx="104" cy="1802"/>
<g className="gears">
			<path className="gear1" d="M43.7,1844c0.1,0,0.2,0.1,0.3,0.1c0.3,0.2,0.5,0.5,0.8,0.8c0.1,0.1,0.1,0.1,0.2,0c0.5-0.2,1.1-0.4,1.6-0.6
				c0.1,0,0.1-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.1c0-0.2,0.1-0.3,0.3-0.4c0.5-0.1,0.9-0.1,1.4-0.1c0.3,0,0.4,0.1,0.5,0.3
				c0.1,0.4,0.2,0.7,0.3,1.1c0,0,0.1,0.1,0.1,0.1c0.6,0.1,1.1,0.2,1.7,0.2c0.1,0,0.2,0,0.3-0.1c0.2-0.3,0.4-0.6,0.6-0.9
				c0.1-0.2,0.3-0.2,0.5-0.1c0.5,0.2,1,0.4,1.5,0.6c0.2,0.1,0.2,0.2,0.2,0.4c-0.1,0.4-0.2,0.7-0.3,1.1c0,0.1,0,0.1,0.1,0.2
				c0.5,0.4,0.9,0.7,1.4,1.1c0.1,0.1,0.1,0.1,0.2,0c0.3-0.2,0.6-0.3,0.9-0.4c0.2-0.1,0.4-0.1,0.5,0.1c0.3,0.4,0.6,0.8,0.9,1.2
				c0.1,0.2,0.1,0.3,0,0.5c-0.2,0.2-0.5,0.5-0.7,0.7c-0.1,0.1-0.1,0.1,0,0.2c0.2,0.5,0.4,1.1,0.6,1.6c0,0.1,0.1,0.1,0.2,0.2
				c0.3,0,0.7,0.1,1,0.1c0.2,0,0.3,0.1,0.3,0.3c0.1,0.5,0.1,1,0.2,1.6c0,0.2-0.1,0.3-0.3,0.4c-0.3,0.1-0.6,0.2-0.9,0.3
				c-0.1,0-0.1,0.1-0.1,0.2c-0.1,0.6-0.2,1.2-0.3,1.8c0,0.1,0,0.1,0.1,0.2c0.3,0.2,0.5,0.4,0.8,0.5c0.2,0.1,0.3,0.3,0.2,0.6
				c-0.2,0.4-0.4,0.9-0.6,1.3c-0.1,0.2-0.2,0.3-0.4,0.2c-0.3-0.1-0.7-0.1-1-0.2c-0.1,0-0.2,0-0.3,0.1c-0.3,0.4-0.7,0.9-1.1,1.3
				c-0.1,0.1-0.1,0.1,0,0.2c0.2,0.3,0.3,0.6,0.5,1c0.1,0.2,0.1,0.3-0.1,0.5c-0.4,0.3-0.8,0.6-1.3,0.9c-0.2,0.1-0.3,0.1-0.5,0
				c-0.3-0.3-0.5-0.5-0.8-0.8c0,0-0.1-0.1-0.2,0c-0.5,0.3-1.1,0.5-1.7,0.6c0,0-0.1,0.1-0.1,0.1c0,0.4-0.1,0.7-0.1,1.1
				c0,0.2-0.1,0.3-0.4,0.4c-0.5,0.1-1,0.1-1.5,0.2c-0.2,0-0.4-0.1-0.4-0.3c-0.1-0.3-0.2-0.7-0.3-1c0-0.1-0.1-0.1-0.2-0.1
				c-0.6,0-1.2-0.1-1.8-0.2c0,0-0.1,0-0.2,0.1c-0.2,0.3-0.4,0.6-0.6,0.9c-0.1,0.2-0.3,0.3-0.5,0.1c-0.4-0.2-0.9-0.4-1.3-0.6
				c-0.3-0.1-0.3-0.2-0.3-0.5c0.1-0.3,0.2-0.7,0.2-1c0-0.1,0-0.1-0.1-0.2c-0.5-0.3-0.9-0.7-1.3-1.1c-0.1-0.1-0.2-0.1-0.3,0
				c-0.3,0.2-0.6,0.3-0.9,0.4c-0.2,0.1-0.3,0.1-0.5-0.1c-0.3-0.4-0.6-0.8-0.9-1.2c-0.1-0.2-0.1-0.3,0-0.5c0.2-0.2,0.5-0.5,0.7-0.7
				c0.1-0.1,0.1-0.1,0-0.2c-0.2-0.6-0.4-1.1-0.7-1.7c0-0.1-0.1-0.1-0.2-0.1c-0.3,0-0.7,0-1-0.1c-0.3,0-0.4-0.1-0.4-0.4
				c-0.1-0.5-0.1-1-0.2-1.4c0-0.3,0.1-0.4,0.3-0.4c0.3-0.1,0.7-0.2,1-0.3c0,0,0.1-0.1,0.1-0.1c0.1-0.6,0.1-1.2,0.3-1.8
				c0,0,0-0.1,0-0.1c-0.3-0.2-0.6-0.4-0.9-0.6c-0.2-0.1-0.2-0.3-0.2-0.5c0.2-0.5,0.4-0.9,0.6-1.4c0.1-0.2,0.2-0.3,0.5-0.2
				c0.3,0.1,0.7,0.2,1,0.2c0.1,0,0.1,0,0.2-0.1c0.4-0.5,0.8-0.9,1.1-1.4c0,0,0-0.1,0-0.2c-0.1-0.3-0.3-0.6-0.5-1
				c-0.1-0.2-0.1-0.4,0.1-0.5c0.4-0.3,0.8-0.6,1.2-0.9C43.5,1844.1,43.6,1844,43.7,1844z"/>
			<path className="gear2" d="M56.6,1861.7c-0.1-0.3-0.1-0.5-0.2-0.8c-0.1-0.3,0-0.4,0.2-0.5c0.3-0.2,0.7-0.3,1-0.5
				c0.2-0.1,0.3-0.1,0.4,0.1c0.2,0.2,0.3,0.4,0.5,0.7c0.1,0.1,0.1,0.1,0.3,0.1c0.4-0.1,0.9-0.2,1.3-0.2c0.1,0,0.1-0.1,0.2-0.1
				c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.2,0.1-0.3,0.4-0.3c0.4,0,0.8,0.1,1.2,0.1c0.2,0,0.3,0.1,0.3,0.3c0,0.3,0.1,0.6,0.1,0.8
				c0,0.1,0.1,0.1,0.1,0.2c0.4,0.1,0.9,0.3,1.3,0.4c0,0,0.1,0,0.2,0c0.2-0.2,0.4-0.4,0.6-0.6c0.1-0.1,0.2-0.1,0.4,0
				c0.3,0.2,0.7,0.4,1,0.7c0.2,0.1,0.2,0.2,0.1,0.4c-0.1,0.3-0.2,0.5-0.3,0.8c0,0,0,0.1,0,0.2c0.3,0.4,0.6,0.7,0.9,1.1
				c0,0,0.1,0.1,0.2,0.1c0.3-0.1,0.5-0.1,0.8-0.2c0.2-0.1,0.3,0,0.5,0.2c0.2,0.4,0.3,0.7,0.5,1.1c0.1,0.2,0.1,0.3-0.1,0.4
				c-0.2,0.2-0.4,0.3-0.6,0.5c-0.1,0.1-0.1,0.1-0.1,0.2c0.1,0.5,0.2,0.9,0.3,1.4c0,0.1,0.1,0.2,0.2,0.2c0.3,0.1,0.5,0.1,0.8,0.2
				c0.2,0.1,0.3,0.2,0.2,0.4c0,0.4-0.1,0.8-0.1,1.2c0,0.2-0.1,0.3-0.3,0.3c-0.3,0-0.5,0.1-0.8,0.1c-0.1,0-0.1,0-0.2,0.1
				c-0.1,0.4-0.3,0.9-0.5,1.3c0,0.1,0,0.2,0.1,0.2c0.2,0.2,0.4,0.4,0.5,0.5c0.2,0.2,0.2,0.2,0.1,0.4c-0.2,0.3-0.5,0.7-0.7,1
				c-0.1,0.2-0.2,0.2-0.4,0.1c-0.3-0.1-0.5-0.2-0.8-0.3c-0.1,0-0.1,0-0.2,0c-0.3,0.3-0.7,0.6-1,0.9c-0.1,0.1-0.1,0.1-0.1,0.2
				c0.1,0.3,0.2,0.5,0.2,0.8c0,0.2,0,0.3-0.2,0.4c-0.4,0.2-0.8,0.4-1.2,0.6c-0.1,0.1-0.3,0-0.3-0.1c-0.2-0.2-0.3-0.5-0.5-0.7
				c-0.1-0.1-0.1-0.1-0.2-0.1c-0.4,0.1-0.9,0.2-1.3,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0.3-0.1,0.6-0.2,0.8c0,0.2-0.2,0.3-0.3,0.3
				c-0.4,0-0.8-0.1-1.2-0.1c-0.2,0-0.3-0.1-0.3-0.3c0-0.3-0.1-0.6-0.1-0.8c0-0.1,0-0.1-0.1-0.2c-0.4-0.1-0.9-0.3-1.3-0.4
				c0,0-0.1,0-0.2,0c-0.2,0.2-0.4,0.4-0.7,0.6c-0.1,0.1-0.2,0.1-0.4,0c-0.3-0.2-0.7-0.4-1-0.7c-0.2-0.1-0.2-0.2-0.1-0.4
				c0.1-0.3,0.2-0.5,0.3-0.8c0-0.1,0-0.1,0-0.2c-0.3-0.3-0.6-0.7-0.9-1c-0.1-0.1-0.1-0.1-0.2-0.1c-0.3,0.1-0.5,0.2-0.8,0.2
				c-0.2,0-0.3,0-0.4-0.2c-0.2-0.4-0.4-0.8-0.6-1.1c-0.1-0.1,0-0.3,0.1-0.4c0.2-0.2,0.4-0.3,0.7-0.5c0.1-0.1,0.1-0.1,0.1-0.2
				c-0.1-0.5-0.2-0.9-0.3-1.4c0-0.1-0.1-0.1-0.2-0.2c-0.3-0.1-0.5-0.1-0.8-0.2c-0.2-0.1-0.3-0.1-0.2-0.3c0-0.4,0.1-0.8,0.1-1.2
				c0-0.2,0.1-0.3,0.3-0.3c0.3,0,0.5-0.1,0.8-0.1c0.1,0,0.1,0,0.2-0.1c0.1-0.4,0.3-0.9,0.5-1.3c0-0.1,0-0.2-0.1-0.3
				c-0.2-0.2-0.4-0.3-0.5-0.5c-0.2-0.2-0.2-0.3,0-0.5c0.2-0.3,0.4-0.7,0.7-1c0.1-0.2,0.2-0.2,0.4-0.1c0.3,0.1,0.5,0.2,0.8,0.3
				c0.1,0,0.1,0,0.2,0C55.8,1862.4,56.2,1862,56.6,1861.7z"/>

			<path className="gear1" d="M43.4,1853.7c-0.4-3.2,1.9-6.1,5.2-6.5c3.3-0.4,6.2,2,6.5,5.2c0.3,3.2-2,6.1-5.2,6.5
				C46.6,1859.2,43.7,1856.9,43.4,1853.7z M54.6,1852.5c-0.3-3-3-5.2-6-4.9c-3,0.3-5.2,3-4.8,6c0.3,3,3,5.1,6,4.8
				C52.8,1858.2,54.9,1855.5,54.6,1852.5z"/>
			<path className="gear2 gld" d="M60.4,1863.1c2.6-0.3,5,1.6,5.3,4.2c0.3,2.6-1.6,5-4.2,5.3c-2.7,0.3-5-1.6-5.3-4.3
				C55.9,1865.7,57.8,1863.3,60.4,1863.1z"/>
	</g>
</svg>



            </div>
            <Footer/>
                </div>
    )
  }
}

export default Process
