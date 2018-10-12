import React, {Component} from 'react'
import './index.css'
import next from './next_post.png'
import comm from './hypercomments.png'
import ReactDisqusComments from 'react-disqus-comments';
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import withDsideApi from "../../../HOC/Fetch";
 class BlogItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blogItem: [],
      blogCategory: ''
    }
  }




  async componentDidMount() {
   window.scrollTo(0, 0)
   await this.getData(this.props.match.params.blogitem)
   await this.setState({blogCategory: this.state.blogItem.category})
  }

  getData = (postName) => {
    return fetch(`${process.env.REACT_APP_API}/${localStorage.getItem('lang')}/blog/getBlogItemDetails/${postName}/`).then((response) => {
        return response.json()
    }).then((item) => {
        this.setState({
            blogItem: item
        })
    })
  }

  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    const {blogItem} = this.state
      const {location, history} = this.props
    return(
        <div>
          <div className="blog__post-container">

            <div className="blog__item" style={{backgroundImage: `url(${process.env.REACT_APP_DOMAIN}${blogItem.main_image})`}}>
              <div className="blog__item-content">
                <div className="tag-item">
                  <p>{this.state.blogCategory.name}</p>
                </div>
                <div className="title-item">
                  <h4>{blogItem.title}</h4>
                </div>
                <div className="description-item">
                  <p dangerouslySetInnerHTML={{__html: this.props.location.state}} />
                </div>


                <div className="blog__post-data">
                  <div className="watching__post">
                    <div className="icon-watching">
                      <div className="icon__blog">
                      </div>
                      <p>{blogItem.views}</p>
                    </div>
                  </div>
                  <div className="time__post">
                    <div className="icon-timer">
                      <div className="icon__blog"></div>
                      <p>{blogItem.watching_time} <span>minutes</span></p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio_content__posts">

            <div className="right__content-post">

              <div className="content__body-post">

               <p dangerouslySetInnerHTML={{__html: blogItem.description}} />

              </div>

              <div className="comment__body-post">

                <div id="comment__container">
                  <ReactDisqusComments
                      shortname="example"
                      identifier="something-unique-12345"
                      title="Thread"
                      url="//dside-pl/"
                      category_id="123456"
                      onNewComment={this.handleNewComment}/>
                </div>

              </div>

            </div>

            <div className="left__content-post">

              <div className="content__body-post_img">

                <div className="left__img" style={{ backgroundImage:  `url(${process.env.REACT_APP_DOMAIN}${blogItem.thumbnail})` }}
                     onClick={() => {
                         history.push({
                             pathname: `/${location.pathname.substr(1,2)}/blog/${this.props.nextPost.base_name}`
                         })
                     }} >

                </div>

              </div>
            </div>
            </div>

          </div>


        </div>
    )
  }
}

export default compose (withRouter,withDsideApi)(BlogItem,'/blog/getBlogItems/', 'BLOG')