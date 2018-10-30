import React, {Component} from 'react'
import './index.css'
import next from './next_post.png'
import comm from './hypercomments.png'
import ReactDisqusComments from 'react-disqus-comments';
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import withDsideApi from "../../../HOC/Fetch";
import redirect from './redirect.svg'

 class BlogItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blogItem: [],
      blogCategory: '',
      notFound: false
    }
  }




  async componentDidMount() {
   window.scrollTo(0, 0)
   await this.getData(this.props.match.params.blogitem)
   await this.setState({blogCategory: this.state.blogItem.category})
  }

  getData = (postName) => {
    return fetch(`${process.env.REACT_APP_API}/${localStorage.getItem('lang')}/blog/getBlogItemDetails/${postName}/`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
    }).then((item) => {
        this.setState({
            blogItem: item
        })
    }).catch((error) => {
     this.setState({notFound: true})
    })
  }

  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
      const {blogItem} = this.state
      const {location, history} = this.props
      console.log(this.props.nextPost)
    return(
        <div>
        {this.state.notFound ? null : 
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
                  {this.props.nextPost != undefined ?
                      <div className="left__img"
                           style={{backgroundImage: `url(${process.env.REACT_APP_DOMAIN}${this.props.nextPost.main_image})`}}
                      >
                          <div className="content__left-post">
                                <div className="left__redirect-content">
                                    {this.props.lastPost ? <p>Previous post</p> : <p>Next post</p>}
                                    <h4 className='left__redirect-title'>{this.props.nextPost.title}</h4>
                                </div>
                                <div className="right__redirect-next">
                                    <img  onClick={() => {
                                        history.push({
                                            pathname: `/${location.pathname.substr(1, 2)}/blog/${this.props.nextPost.base_name}`
                                        })
                                    }} src={redirect} alt=""/>
                                </div>
                          </div>
                      </div>
                  : null}
              </div>
            </div>
            
            </div>
              
          </div>
  
                                  }
        </div>
    )
  }
}

export default compose (withRouter,withDsideApi)(BlogItem,'/blog/getBlogItems/', 'BLOG')