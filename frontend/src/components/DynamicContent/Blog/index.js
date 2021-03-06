import React, { Component, Fragment } from 'react'
import './index.css'
import withDsideApi from "../../../HOC/Fetch";
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import PropTypes from "prop-types";
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from "translate-components";
import SuggestPoppup from "../../../HOC/SuggestPoppup";
import canvasAnimate from './canvasAnimate'
import Helmet from 'react-helmet-async'
import Footer from '../../Basic/Footer';


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
      setTimeout(() => {
        window.WebFont.load({
          google: {
            families: ['Fredericka the Great']
          },
          active: function() {
            canvasAnimate.init(canvasAnimate.buildTextSprites(this.google.families[0]))
          },
          inactive: function() {
            alert("Failed to load any custom font, app quits");
          },
          timeout: 500
        });
      }, 500)
      reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  

  

  render () {
    const {history, location} = this.props   
    return (
      <Fragment>
        
      <div className='wrapper__blog-container'>
       <Helmet>
          <title> Dside Blog </title>
        </Helmet>
      <section className="blog__container page-centered">
        <div className="blog__content">
          <div className="blog__post-items">
            {this.props.dataDside.length === 0 ? <div className='progress'> <Translate>Loading</Translate>...</div> : this.props.dataDside.map((item, key) => {
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
             if (this.props.dataDside.length !== key + 1) {
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
                    {<SuggestPoppup modalStatus={this.state.modalActive} onClose={this.changePoppup} />}
                </div>
              </div>
              </div>
            
          </div>

        </div>
      </section>
      </div>
     <Footer/>
     </Fragment>
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
