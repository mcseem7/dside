import React, { Component } from 'react'
import './index.css'
import logoProject from './rounded-rectangle-10.png'

export default class PortfolioItem extends Component {
  constructor () {
    super()

    this.state = {
      items: []
    }
  }

  async componentDidMount () {
    try {
      const portfolioJson = await fetch('http://dside.pl/api/en/portfolio/getPortfolioItemDetails/1')
      const portfolioItem = await portfolioJson.json()
      this.setState({ items: portfolioItem })
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    console.log(this.state)
    return (
      <div className="container__portfolio-item">

        <div className="portfolio__header_item-wrapper">
          <div className="header__portfolio-content">
            {/* <div className="project__picture"> */}
            {/* <img src="#" alt=""/> */}
            {/* </div> */}
            <div className="project__titles">
              <div className="portfolio__title-content">
                <div className="portfolio__name__content">
                  <div className="project__logo">
                    <img src={logoProject} alt="" />
                  </div>
                  <div className="project__names">
                    <div className="category__project">
                      <p>design</p>
                    </div>
                    <div className="name__project">
                      <h4>Work name</h4>
                    </div>

                    <div className="name__customer">
                      <p>customer name</p>
                    </div>
                  </div>
                </div>

                <div className="portfolio__description__content">
                  <div className="project_description__content">
                    <p className="name__description">Short project
                        description: <br />
                    </p>
                    <p className="description__project"> Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut
                    </p>
                  </div>
                </div>

                <div className="portfolio__datatime__content">
                  <div className="portfolio__post-data">
                    <div className="watching__post">
                      <div className="icon-watching">
                        <div className="icon__blog" />
                        <p>241 </p>
                      </div>
                    </div>
                    <div className="time__post">
                      <div className="icon-timer">
                        <div className="icon__blog" />
                        <p>5 <span>minutes</span></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      <div className="content__project-portfolio">

      <div className="container__project-task">

        <div className="name__task">
          <h4>Task</h4>
        </div>


          <div className="project__task_portfolio">
            <p>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>



        </div>

      </div>

      </div>

    )
  }
}
