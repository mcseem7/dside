import React, { Component,Fragment } from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import  { TimelineLite } from 'gsap/all'
import ScrollMagic from "../../../scrollMagic";
import { reactTranslateChangeLanguage } from "translate-components";

 class PortolioPost extends Component {
    constructor(props) {
        super(props)


        this.state = {
            itemId: [],
            lang: ''
        }
    }

    componentDidMount() {

        this.portitemTl = new TimelineLite();
        let trigger = '.postitem';
        this.portitemTl
            .staggerFrom('.postitem', .3, { backgroundColor: 'transparent', opacity:0, ease: 'Power0.EaseIn'}, .15)
            .staggerFrom('.postanim', .5, {y: -180, autoAlpha: 0, opacity: 0, ease: 'Back.EaseIn'}, .25, "-=0.3");
        let controller = new ScrollMagic.Controller();
        let scene = new ScrollMagic.Scene({triggerElement: trigger, triggerHook: .6, reverse: false})
            .setTween(this.portitemTl)
            .addTo(controller);
    const postitems = document.querySelectorAll('.postitem');
    postitems.forEach(function(item) {
      // Select the correct elements within our scope
      const heading = item.querySelectorAll('.postanim'),
      itemimg = item.querySelectorAll('.itemimg'),
      itemhead = item.querySelectorAll('.itemhead'),
      itemsubhead = item.querySelectorAll('.itemcat'),
      itemlink = item.querySelectorAll('.montelink'),
      hovertl = new TimelineLite({paused: true});
      hovertl.from(itemimg, .4, {scale: 1.1, ease: 'Power4.easeInOut', yoyo:true})
      .from(itemhead, .14, {y: 20, opacity: 0, ease: 'Back.easeIn', yoyo:true},"-=0.4" )
      .from(itemsubhead, .24, {y: 5, opacity: 0, ease: 'Back.easeIn', yoyo:true},"-=0.36")
      .from(itemlink, .24, {y: 5, opacity: 0, ease: 'Back.easeIn', yoyo:true},"-=0.36");


      item.addEventListener("mouseenter", function() {
        hovertl.play();
      });

      item.addEventListener("mouseleave", function() {
        hovertl.reverse();
      });
    });

    }

    render() {
    return (
<Fragment> {
  this.props.dataDside.map((item, key) => {
          return(
    <div className="grid" >
      <figure className="postitem">
                <div className="postanim">
                 <Link  to={`/${this.state.lang}/portfolio/${item.CURL}`}>
         <img className="itemimg" src={`${process.env.REACT_APP_DOMAIN}/${item.thumbnail}`}
             alt={item.name}/>
        <figcaption className="figcaption">
          <h2 className="itemhead">{item.name}</h2>
          {
            <span className="itemcat">{item.category.name}</span>
        }

        </figcaption>
            </Link>
            </div>

<noindex><a href={item.projectlink} className="montelink" rel="nofollow" target="_blank">{item.projectlink}</a></noindex>
      </figure>

    </div>
            )
  })
}

</Fragment>
    )
  }

}

export default  PortolioPost
