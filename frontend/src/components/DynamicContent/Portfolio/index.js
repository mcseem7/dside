import React, { Component, Fragment } from 'react'
import './index.css'
import Helmet from 'react-helmet-async'
import withDsideApi from "../../../HOC/Fetch";
import withLanguage from "../../../HOC/withLanguage";
import CategoryItem from './CategoryItem';
import PortolioPost from '../Header__Post/Portfolio__Post';
import gsap from 'gsap'
import Arrow  from '../../Basic/Footer/arrow.svg';
import Ad  from '../Main/About__block/chess.png';
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Footer from '../../Basic/Footer';


class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataItems: [],
      dataItemsStatic: [],
      activeFilter: null,
      category: null,
    }
  }

  async componentDidMount() {
   window.scrollTo(0, 0);
      return await fetch(`${process.env.REACT_APP_API}/${this.props.language}/portfolio/getPortfolioItems/`).then((response) => {
      return response.json()
    }).then((items) => {
         this.setState({dataItems: items});
         this.setState({dataItemsStatic: items})
    })
  }

  setFilteringCategory = async (selectFilterId, category) => {
      await this.setState({
        activeFilter: selectFilterId,
        category: category
      });
      await this.getCategoryData();
  }

  setFilteringCategoryNull = async (selectFilterId, category) => {
      await this.setState({
        activeFilter: selectFilterId,
        category: category
      });
      await this.getCategoryDataNull();
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
 getCategoryDataNull = () => {
    return fetch(`${process.env.REACT_APP_API}/${this.props.language}/portfolio/getPortfolioItems/`).then((response) => {
       return response.json()
     }).then((items) => {
          this.setState({dataItems: items})
     })
 }

componentDidUpdate(){

   console.log('LOL', this.state);
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
        <h2><Translate>We'll make it best. They have already tried it.</Translate></h2>
          <div className="sorting__items-container">

            <div className="sorting__items-left">

              <div className="sortby__category">

                <ul className="portfolio-category__list">

               <li class="portfolio-category__item" onClick={this.setFilteringCategoryNull}><p class=""><Translate>Everything</Translate><sup>({this.state.dataItemsStatic.length})</sup></p></li>
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
                <div className="portfolio-sort__title"><Translate>Sort by:</Translate></div>

                <div className="sorting-portfolio__wrapper">
                  {/* <div className="portfolio-sorting__date">Date</div> */}

                  <div className="portfolio-sorting__date"><Translate>Category</Translate></div>
                </div>
              </div>
            </div>
</div>
          </div>
          <div className="portfolio__items-container">
              {this.props.loading ? (
                <PortolioPost {...this.props} dataDside={this.state.dataItems} />
              ) : null}
          </div>
           <div className="advantages">
             <div className="advantage-item right">
                        <div className="advitem-image-holder small rodrigo">
                            <img src={Ad} width={460} className="a2"/>

                        </div>
                        <div className="advitem-inner right">
                            <div className="adv-heading a2">Понравились наши работы?</div>
                            <div className="adv-text a2">Самое время рассчитать приблизительную стоимость Вашего проекта. Для рассчета точной стоимости, пожалуйста, оставьте заявку через форму "Заказать", либо при помощи калькулятора цен.</div>
                            <div className="adv-btn a2">Рассчитать<img src={Arrow} width={16} alt=""/></div>
                        </div>
                    </div>
           </div>
        </section>
        <Footer/>
      </div>
      </Fragment>
    )
  }
}

export default withLanguage(withDsideApi(Portfolio, '/portfolio/getAllCategories/', null))
