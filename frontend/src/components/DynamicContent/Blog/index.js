import React, { Component } from 'react'
import './index.css'
import gridIcon from './grid-icon.svg'

export default class Blog extends Component {
  constructor () {
    super()

    this.state = {
      blogItem: []
    }
  }

  componentDidMount () {
    const jsonBlogItem =
      {
        blogPost: [
          {
            name: 'Техника исполнения леттерингов и ее будущее',
            tag: 'Design',
            watching: '241',
            watchingTime: '5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, hic modi officiis pariatur quod reiciendis repellendus sit. Accusamus aspernatur assumenda corporis culpa cumque pariatur qui quod recusandae rerum similique, sunt?'
          },
          {
            name: 'Внедрение дизайна',
            tag: 'Design',
            watching: '241',
            watchingTime: '5',
            description: 'lorem safsdfsdfsdf'
          },
          {
            name: 'Технология привличения клиентов',
            tag: 'Technologies',
            watching: '241',
            watchingTime: '5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis itaque quae quibusdam, recusandae sint tenetur vero voluptates. Animi at ex fugiat illo magnam quas saepe. Et expedita molestias rerum.'
          },
          {
            name: 'Создание бренда на етапе формирования перспектив',
            tag: 'Branding',
            watching: '241',
            watchingTime: '5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum deleniti dolore magnam quibusdam ut. Consectetur doloremque ducimus ipsa quod sint? Aperiam architecto deserunt laborum laudantium nulla quia sit totam.'
          },
          {
            name: 'Разработка логотипа для формирования перспективы компании',
            tag: 'logos',
            watching: '241',
            watchingTime: '5',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate eos itaque odit quos sunt voluptatum. Accusantium deleniti dolorum itaque laboriosam officia pariatur porro possimus voluptatibus! Deserunt enim itaque magni.'
          }
        ]
      }

    this.setState({
      blogItem: jsonBlogItem.blogPost
    }, () => console.log(this.state.blogItem))
  }

  render () {
    return (

      <section className="blog__container">
        <div className="blog__content">
          <div className="blog__post-items">
            {this.state.blogItem.map((item, key) => (<div className="blog__item">
              <div className="blog__item-content">
                <div className="tag-item">
                  <p>{item.tag}</p>
                </div>
                <div className="title-item">
                  <h4>{item.name}</h4>
                </div>
                <div className="description-item">
                  <p>{item.description}</p>
                </div>

                <div className="blog__post-data">
                  <div className="watching__post">
                    <div className="icon-watching">
                      <div className="icon__blog"><img
                        src=""
                        alt=""
                      />
                      </div>
                      <p>{item.watching}</p>
                    </div>
                  </div>
                  <div className="time__post">
                    <div className="icon-timer">
                      <div className="icon__blog"><img
                        src=""
                        alt=""
                      />
                      </div>
                      <p>{item.watchingTime}</p>

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
                  <img src={gridIcon} alt=""/>
                </div>
              </div>
            </div>

            <div className="latest__post-content">
              {this.state.blogItem.map((item, key) => (<div className="latest-post">

                <div className="latest-post__tag">
                  <p>{item.tag}</p>
                </div>

                <div className="latest-post__description">
                  <p>{item.name}</p>
                </div>

                <div className="latest-post__data">
                  <div className="watching__post">
                    <div className="icon-watching">
                      <div className="icon__blog"><img
                        src=""
                        alt=""
                      />
                      </div>
                      <p>{item.watching}</p>
                    </div>
                  </div>
                  <div className="time__post">
                    <div className="icon-timer">
                      <div className="icon__blog"><img
                        src=""
                        alt=""
                      />
                      </div>
                      <p>{item.watchingTime}</p>

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
                  <img src="#" alt="" />
                </div>
              </div>

              <div className="post__incoming-left">
                <div className="post__incoming-content">
                  <div className="incoming__title">
                    <h3>New posts</h3>
                  </div>
                  <div className="incoming__description">
                    <p>Are coming soon</p>
                  </div>

                  <div className="incoming__button">
                    <button>Suggest a topic</button>
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