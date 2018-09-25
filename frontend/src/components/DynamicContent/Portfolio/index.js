import React, {Component} from 'react'
import './index.css'


export default class Portfolio extends Component {
  constructor() {
    super()

    this.state = {
      dataItems: []
    }

  }


  componentDidMount() {
      fetch(`http://dside.pl/api/en/portfolio/getPortfolioItems`)
        .then((response) => {
        return response.json()
        }).then((data) => {
          return this.setState({dataItems: data})
        })
  }


  render() {
    return(
        <div>
          <section className="portfolio__items-container">

            <div className="sorting__items-container">
              <div className="sorting__items-left">

                <div className="sortby__category">

                  <ul className="portfolio-category__list">
                    <li className="portfolio-category__item">
                      <p>Logos</p>
                    </li>

                    <li className="portfolio-category__item">
                      <p>Websites</p>
                    </li>
                  </ul>

                </div>

              </div>
              <div className="sorting__items-right">
                <div className="sortby__type">
                  <div className="portfolio-sort__title">Sort by:</div>

                  <div className="sorting-portfolio__wrapper">
                  <div className="portfolio-sorting__date">Date</div>

                  <div className="portfolio-sorting__date">Category</div>
                  </div>
                </div>
              </div>

            </div>
            <div className="portfolio__items-container">
            </div>
          </section>
        </div>
    )
  }

}
