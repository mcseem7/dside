import React, {Component} from 'react'
import './index.css'
import next from './next_post.png'
import comm from './hypercomments.png'
import ReactDisqusComments from 'react-disqus-comments';

export default class BlogItem extends Component {
  constructor(props) {
    super(props)

  }



  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    console.log(this.props)
    return(
        <div>

          <div className="blog__post-container">
            <div className="blog__item">
              <div className="blog__item-content">
                <div className="tag-item">
                  <p>dfsf</p>
                </div>
                <div className="title-item">
                  <h4>sdf</h4>
                </div>
                <div className="description-item">
                  <p>ghj</p>
                </div>

                <div className="blog__post-data">
                  <div className="watching__post">
                    <div className="icon-watching">
                      <div className="icon__blog">
                      </div>
                      <p>jkl</p>
                    </div>
                  </div>
                  <div className="time__post">
                    <div className="icon-timer">
                      <div className="icon__blog"></div>
                      <p>jkl <span>minutes</span></p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio_content__posts">

            <div className="right__content-post">

              <div className="content__body-post">

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

              </div>

              <div className="comment__body-post">

                <div id="comment__container">
                  <ReactDisqusComments
                      shortname="example"
                      identifier="something-unique-12345"
                      title="Example Thread"
                      url="http://www.example.com/example-thread"
                      category_id="123456"
                      onNewComment={this.handleNewComment}/>
                </div>

              </div>

            </div>

            <div className="left__content-post">

              <div className="content__body-post_img">

                <div className="left__img" style={{ backgroundImage:  `url(${next})` }}></div>

              </div>
            </div>
            </div>

          </div>


        </div>
    )
  }
}