import React, { Component } from 'react'
import './index.css'
import gridIcon from './grid-icon.svg'
import { Link } from 'react-router-dom'
import BlogItem from '../BlogItem'
import withDsideApi from "../../../HOC/Fetch";
import { withRouter } from 'react-router-dom'
import { compose, branch, renderComponent } from 'recompose'
import PropTypes from "prop-types";
import subscribe from './subscribe.png'


class Blog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blogItem: []
    }
  }


  componentDidMount () {
      window.scrollTo(0, 0)
  }

  render () {
    const {history, location} = this.props
    return (
      <section className="blog__container page-centered">
        <div className="blog__content">
          <div className="blog__post-items">
            {this.props.dataDside.length == 0 ? <div className='progress'>Loading...</div> : this.props.dataDside.map((item, key) => (
              <div className="blog__item" style={{backgroundImage: `url(${process.env.REACT_APP_DOMAIN}${item.main_image})` }}>
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
            </div>))
            }
          </div>

          <div className="blog-post__latest-posts">

            <div className="latest-posts__titles">
              <div className="latest__post-title">
                <h4>Latest posts</h4>
              </div>
              <div className="icon-cube__wrapper">
                <div className="icon__cube">

                </div>
              </div>
            </div>

            <div className="latest__post-content">
              {this.props.dataDside.map((item, key) => (

                <div className="latest-post" onClick={() => {
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

              </div>))
              }

            </div>
          </div>

          <div className="post__incoming">

            <div className="post__incoming-content">

              <div className="post__incoming-right">
                <div className="post__incoming-img">
                  <img src={subscribe} alt="" />
                </div>
              </div>

              <div className="post__incoming-left">
                <div className="post__incoming-titles">
                  <div className="incoming__title">
                    <h3>New posts</h3>
                  </div>
                  <div className="incoming__description">
                    <p>Are coming soon.</p>
                  </div>

                  <div className="incoming__button">
                    <a href='#'>Suggest a topic</a>
                  </div>
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
