import React, { Component, Fragment } from 'react'
import './index.css'
import Helmet from 'react-helmet-async'
import withDsideApi from "../../../HOC/Fetch";
import withLanguage from "../../../HOC/withLanguage";
import CategoryItem from './CategoryItem';
import PortolioPost from '../Header__Post/Portfolio__Post';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Footer from '../../Basic/Footer';
import Header from '../../Basic/Header';


class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      headerDark: false,
      dataItems: [],
      activeFilter: null,
      category: ''
    }
  }

  async componentDidMount() {
    return await fetch(`${process.env.REACT_APP_API}/${this.props.language}/portfolio/getPortfolioItems/`).then((response) => {
      return response.json()
    }).then((items) => {
         this.setState({dataItems: items})
    })
  }


 setFilteringCategory = async (selectFilterId, category) => {
      await this.setState({
        activeFilter: selectFilterId,
        category: category
      })
      await this.getCategoryData()
  }

 isActiveCategory = (id) => {
   return this.state.activeFilter == id
 }

 getCategoryData = () => {
    return fetch(`${process.env.REACT_APP_API}/${this.props.language}/portfolio/getPortfolioItems/${this.state.category.tag}/`).then((response) => {
       return response.json()
     }).then((items) => {
          this.setState({dataItems: items})
     })
 }


 render() {
    return (
      <Fragment>
        
      <div>
        <section className="portfolio__items-category">
          <Helmet>
            <title>Dside Portfolio</title>
          </Helmet>
        <div className="wrapper-row">
        <h2>We'll make it good. They have already tried it.</h2>
          <div className="sorting__items-container">

            <div className="sorting__items-left">

              <div className="sortby__category">

                <ul className="portfolio-category__list">
                {this.props.dataDside.map((category, index) => {
                    return (
                  <CategoryItem 
                  key={index}
                  {...this.state} 
                  category={category}
                  isActiveCategory={this.isActiveCategory(index)}
                  onActiveFilteringCategory={this.setFilteringCategory.bind(this,index, category)} 
                  {...this.props}/>
                  )
                })}
                </ul>

              </div>

            </div>
            <div className="sorting__items-right">
              <div className="sortby__type">
                <div className="portfolio-sort__title">Sort by:</div>

                <div className="sorting-portfolio__wrapper">
                  {/* <div className="portfolio-sorting__date">Date</div> */}

                  <div className="portfolio-sorting__date">Category</div>
                </div>
              </div>
            </div>
</div>
          </div>
          <div className="portfolio__items-container">
             <PortolioPost dataDside={this.state.dataItems} />
          </div>
        </section>
        <Footer/>
      </div>
      </Fragment>
    )
  }
}

export default withLanguage(withDsideApi(Portfolio, '/portfolio/getAllCategories/', null))
