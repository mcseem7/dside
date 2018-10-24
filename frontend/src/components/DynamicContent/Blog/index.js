import React, { Component } from 'react'
import './index.css'
import gridIcon from './grid-icon.svg'
import { Link } from 'react-router-dom'
import BlogItem from '../BlogItem'
import withDsideApi from "../../../HOC/Fetch";
import { withRouter } from 'react-router-dom'
import { compose, branch, renderComponent } from 'recompose'
import PropTypes from "prop-types";
import subscribe from './subscriber.png'
import Translate from 'translate-components'
import { reactTranslateChangeLanguage, TranslateProvider } from "translate-components";
import SuggestPoppup from "../../../HOC/SuggestPoppup";
import WebFont from 'webfontloader'



class Blog extends Component {

  constructor (props) {
    super(props)

    this.state = {
      blogItem: [],
      modalActive: false
    }
  }


    changePoppup = () => {
        this.setState({modalActive: !this.state.modalActive}, () => {
          this.forceUpdate()
        })
    }


  componentDidMount () {
      window.scrollTo(0, 0)
      var test = document.getElementsByTagName("canvas").scrollHeight;
      console.log(test)
      class Ptc {
        // options vx, vy, ax, ay and w are in rate of chg in 1s
        constructor(options) {
          this.reset(options);
        }
        
        get x() { return this._x }
        get y() { return this._y }
        get rz() { return this._rz }
        
        update(dt/*s*/) {
          const dtSq = dt**2; 
          this._x += this._vx * dt + 0.5 * this._ax * dtSq;
          this._y += this._vy * dt + 0.5 * this._ay * dtSq;
          this._vx += this._ax * dt; 
          this._vy += this._ay * dt;
          this._rz += this._w * dt;
        }
        
        reset(options) {
          const {x, y, vx, vy, ax, ay, w} = options;
          this._x = x;
          this._y = y;
          this._vx = vx;
          this._vy = vy;
          this._ax = ax;
          this._ay = ay;
          this._w = w; // rotation z in rad
          this._rz = 0; // accu. rotation z, in rad
        }
      }
      
      
      
      class Sys { // a sys that considers gravity 
        constructor({nPtc,w,h,ox,oy}) {
          this._nPtc = nPtc; // num of ptc
          this._w = w; // width
          this._h = h; // height
          this._ox = ox; // origin x
          this._oy = oy; // origin y
          this._ptcs = []; // ptc objects
          this._initPtcs();
        }
        
        _initPtcs() {
          for (let i = 0; i < this._nPtc; ++i) {
            this._ptcs[i] = new Ptc(this._rndProps());
          }
        }
        
        _rndProps() {
          const x = 0;
          const y = 0;
          const vxmin = this._w / 4 * -1;
          const vxmax = this._w / 4;
          const vymin = this._h / 3 * -1; // up
          const vymax = this._h * 3/2 * -1; // up
          const ax = 0; 
          const ay = this._h; // down
          const wmin = 90 * -1; // deg, to rad soon
          const wmax = 90;
          const vx = vxmin + (vxmax - vxmin + 1) * Math.random() | 0;
          const vy = vymin + (vymax - vymin + 1) * Math.random() | 0;
          const w = (wmin + (wmax - wmin + 1) * Math.random() | 0) * Math.PI/180;
          return {x, y, vx, vy, ax, ay, w};
        }
        
        update(dt/*s*/) {
          for (const ptc of this._ptcs) {
            ptc.update(dt);  
            if (this._oy + ptc.y > this._h) {
              ptc.reset(this._rndProps());
            }
          }
        }
      }
      
      
      
      class R2dSpriteSys extends Sys {
        constructor({nPtc,w,h,ox,oy,can,sprites}) {
          super({nPtc, w, h, ox, oy});
          this._can = can;
          this._ctx = can.getContext("2d");
          this._sprites = sprites;
          this._initCustomProps(); // init ptc other props
          this._save = this._buildSaveFn();
          this._restore = this._buildRestoreFn(); 
          //this._ctx.font = "0.4em 'Fredericka the Great'";
        }
          
        _initCustomProps() {
          for (const ptc of this._ptcs) {
            ptc.props = this._rndCustomProps();
          }
        }
        
        _rndCustomProps() {
          return {
            sprite: this._sprites[Math.random()*26|0],
            // scale: 1 + Math.random() * 10 | 0 // scale up ref bitmap, will blur
            scale: 0.1 + (Math.random() * 0.9) // scale down, very clear
          };
        }
        
        _buildSaveFn() {
          if (this._ctx.currentTransform)
            return () => this._mat = this._ctx.currentTransform; // edge
          else if (this._ctx.mozCurrentTransform)
            return () => this._mat = this._ctx.mozCurrentTransform; // ff
          else 
            return () => this._ctx.save(); // chrm
        }
        
        _buildRestoreFn() {
          if (this._ctx.currentTransform)
            return () => this._ctx.currentTransform = this._mat; // edge
          else if (this._ctx.mozCurrentTransform)
            return () => this._ctx.mozCurrentTransform = this._mat; // ff
          else 
            return () => this._ctx.restore(); // chrm
        }
        
        render() {
          const ctx = this._ctx;
          ctx.clearRect(0,0,this._w, this._h);
          for (const ptc of this._ptcs) {
            this._save(); // 3.2x less CPU usage if it ONLY records transform mat.
            ctx.translate(this._ox + ptc.x, this._oy + ptc.y);
            ctx.scale(ptc.props.scale, ptc.props.scale);
            ctx.rotate(ptc.rz);
            //ctx.fillText(ptc.props.text, 0, 0); 
            const sprite = ptc.props.sprite; 
            ctx.drawImage(sprite.bitmap,-sprite.w2,-sprite.h2);
            this._restore();
          }
        }
        
        update(dt) { // overwrite super#update
          for (const ptc of this._ptcs) {
            ptc.update(dt);  
            if (this._oy + ptc.y > this._h) {
              ptc.reset(this._rndProps());
              ptc.props = this._rndCustomProps();
            }
          }
        }
      }
      
      
      
      ////////////////////////////
      ///// main 
      ///////////////////////////
      const debugMode = false;
      const nPtc = 128;
      // custom font must be load completely before calling `ctx.fillText`
      // so use webfont lib to do this
        WebFont.load({
          google: {
            families: ['Fredericka the Great']
          },
          active: function() {
            init(buildTextSprites(this.google.families[0]))
          },
          inactive: function() {
            alert("Failed to load any custom font, app quits");
          },
          timeout: 500
        });
  
      function buildTextSprites(family) {
        const sprites = [];
        const fontHeight = 10 * 10;
        const lineHeight = 1.2; // as if css, depends on fontface, trial and error
        const can = document.createElement("canvas");
        can.width = fontHeight * 26; // assume max ch w == ch h (sq shaped)
        can.height = fontHeight * lineHeight;
        
        const ctx = can.getContext("2d");
        ctx.font = `${fontHeight}px ${family}`;
        ctx.fillText("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 0, fontHeight);
        if (debugMode)
          document.body.appendChild(can); //debug
        
        let offset = 0;
        for (let i = 65; i < 65 + 26; ++i) {
          const {width} = ctx.measureText(String.fromCodePoint(i));
          const letter = document.createElement("canvas");
          letter.width = width;
          letter.height = can.height;
          const letterctx = letter.getContext("2d");
          letterctx.drawImage(can,offset,0,width,can.height,0,0,width,can.height);
          offset += width;
          sprites.push({
            bitmap:letter,
            w2:letter.width/2,  // cache
            h2:letter.height/2  // cache
          })
          if (debugMode)
            document.body.appendChild(letter); // debug
        }
        return sprites;
      }
      
      function init(sprites) {
        const can = document.querySelector("canvas");
        const {width, height} = can.getBoundingClientRect();
        can.width = width;
        can.height = height;
        const sys = new R2dSpriteSys({
          nPtc:nPtc, w:width, h:height, ox:width/2, oy:height, can, sprites
        });
        let t0;
        requestAnimationFrame(ts => {
          t0 = ts;
          requestAnimationFrame(function tick(ts) {
            requestAnimationFrame(tick);
            sys.update((ts - t0) / 1000);
            sys.render();
            t0 = ts;
          })
        });  
      }
      
      reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  componentWillMount() {
    console.log(this.props)   
  }

  

  render () {
    const {history, location} = this.props   
    return (
      <section className="blog__container page-centered">
        <div className="blog__content">
          <div className="blog__post-items">
            {this.props.dataDside.length == 0 ? <div className='progress'>Loading...</div> : this.props.dataDside.map((item, key) => {
             if (this.props.dataDside.length === key + 1) { 
              return (  <div className="blog__item" style={{backgroundImage: `url(${process.env.REACT_APP_DOMAIN}${item.main_image})` }}>
              <div onClick={() => {
                  history.push({
                    pathname: `/${location.pathname.substr(1,2)}/blog/${item.base_name}`,
                    state: item.description
                  })
              }} className="blog__item-content">
                <div className="tag-item">
                  <p>{item.category.name }</p>
                </div>
                <div className="title-item">
                  <h4>{item.title}</h4>
                </div>
                <div className="description-item">
                  <p dangerouslySetInnerHTML={{__html: item.description}} />
                </div>

                <div className="blog__post-data">
                  <div className="watching__post">
                    <div className="icon-watching">
                      <div className="icon__blog">
                      </div>
                      <p>{item.views} </p>
                    </div>
                  </div>
                  <div className="time__post">
                    <div className="icon-timer">
                      <div className="icon__blog"></div>
                      <p>{item.watching_time} <span>minutes</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
             }})
            }
          </div>

          <div className="blog-post__latest-posts">

            <div className="latest-posts__titles">
              <div className="latest__post-title">
                <h4><Translate>Latest posts</Translate></h4>
              </div>
              <div className="icon-cube__wrapper">
                <div className="icon__cube">

                </div>
              </div>
            </div>

            <div className="latest__post-content">
              {this.props.dataDside.map((item, key) => {
             if (this.props.dataDside.length != key + 1) { 
              return (<div className="latest-post" onClick={() => {
                  history.push({
                    pathname: `/${location.pathname.substr(1,2)}/blog/${item.base_name}`,
                    state: item.description
                  })
                }} style={{backgroundImage: `url(${process.env.REACT_APP_DOMAIN}${item.main_image})` }}>

                <div className="latest-post__tag">
                  <p>{item.category.name}</p>
                </div>
                      <div>
                <div className="latest-post__description">
                  <p>{item.title}</p>
                </div>

                <div className="latest-post__data">
                  <div className="watching__post">
                    <div className="icon-watching">
                      <div className="icon__blog"><img
                        src=""
                        alt=""
                      />
                      </div>
                      <p>{item.views}</p>
                    </div>
                  </div>
                  <div className="time__post">
                    <div className="icon-timer">
                      <div className="icon__blog"><img
                        src=""
                        alt=""
                      />
                      </div>
                      <p>{item.watching_time}</p>

                    </div>
                  </div>
                </div>
                      </div>

              </div>)
              }})
              
              }

            </div>
          </div>

          <div className="post__incoming">

            <div className="post__incoming-content">
   
          
              <div className="post__incoming-right">
                <div className="post__incoming-img">
                  {/* <img src={subscribe} alt="" /> */}
                </div>
              </div>

              <div className="post__incoming-left">
              <canvas></canvas>
                <div className="post__incoming-titles">
                  <div className="incoming__title">
                    <h3><Translate>New posts</Translate></h3>
                  </div>
                  <div className="incoming__description">
                    <p><Translate>Are coming soon.</Translate></p>
                  </div>

                  <div className="incoming__button" onClick={this.changePoppup}>
                    <a   ><Translate>Suggest a topic</Translate></a>
                  </div>
                    {this.state.modalActive ? <SuggestPoppup onClose={this.changePoppup} /> :  null}
                </div>
              </div>
              </div>
            
          </div>

        </div>
      </section>
    )
  }
}


export default compose(
  withRouter, withDsideApi
)(Blog, '/blog/getBlogItems/', 'BLOG')

Blog.defaultProps = {
  dataDside: []
};

Blog.propTypes = {
  dataDside: PropTypes.array.isRequired,
}
