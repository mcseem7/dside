import React, { Component } from 'react'
import './index.css'
import Translate from 'translate-components'
import ScrollMagic from "../../../scrollMagic";
import { TimelineMax } from "gsap";


export default class About extends Component {
  constructor (props) {
    super(props);
      this.state = {
        lang: ''
      }


  }
 componentDidMount()
    {
        var tl = new TimelineMax();
        var trigger = ".container__about-content";
        var item = ".anim";
        var item2 = ".anim2";
        tl.to(item, 0.5, { y: -50, opacity: 1, ease: 'Power3.easeNone' });
        tl.to(item2, 0.98, { y: -40, opacity: 1, ease: 'Power3.easeNone' });
        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({triggerElement: trigger, triggerHook: .3, duration: "100%"})
                .setTween(tl)
                .addTo(controller);

    }


    render () {

    return (

      <div className="container__about-content">
        <div className="about__company-content">
          <div className="about__content">
            <div className="texts-about">
            <p className="company__content anim">
              <Translate>You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.</Translate>

            </p> <span className="anim2"><Translate >Steven Paul Jobs, Founder at Apple</Translate></span>
</div>
          </div>
        </div>
      </div>

    )
  }
}
