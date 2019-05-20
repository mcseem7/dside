import React, { Component, Fragment } from 'react'
import './index.css'
import arrowNext from './arrow-next.svg'
import { Link, withRouter } from "react-router-dom";
import Translate, { reactTranslateChangeLanguage } from "translate-components";
import fetch from 'isomorphic-fetch'
import ScrollAnimation from 'react-animate-on-scroll'
import withLanguage from '../../../HOC/withLanguage';
import {compose} from 'recompose'
import { matchPath } from 'react-router'
import Footer from '../../Basic/Footer';


 class PortfolioItem extends Component {


  constructor(props) {
    super(props)

    this.state = {
      items: [],
      itemPortfolio: [],
      blocksImg: '',
      attachImg: '',
      similarItems: [],
      category: [],
      statusSimilar: false
    }

  }



  async componentDidMount() { 
    window.scrollTo(0,0);
    const {language, history} = this.props
    const match = await matchPath(history.location.pathname, {
      path: `/${language}/portfolio/:portfolioitem`,
      exact: true,
      strict: false
    })
    await reactTranslateChangeLanguage.bind(this, language)()
    await fetch(`${process.env.REACT_APP_API}/${language}/portfolio/getPortfolioItemDetails/${match.params.portfolioitem}/`).then((response) => {
      if(response.status !== 200) {
        return history.push(`/${language}/notfound`)
      } else {
       return response.json()
      }
    }).then((item) => {
      if(item) {
      this.setState({
        itemPortfolio: item,
        blocksImg: item.blocks,
        attachImg: item.attachment
      })
    }
    })
    if(this.state.itemPortfolio.length !== 0) {
    await this.setState({
      category: this.state.itemPortfolio.category.name,
      similarItems: this.state.itemPortfolio.similar_items
    })
  }
  }


  render() {
    console.log('Similar item data: ', this.state.similarItems[0]);
    return (
      <Fragment>
    
      <div className="container__portfolio-item">
        <ScrollAnimation animateIn="slideInUp" animateOnce="True" >
        <div className="portfolio__header_item-wrapper" style={{ backgroundImage: `url(${process.env.REACT_APP_DOMAIN}${this.state.itemPortfolio.main_image})` }}>
          <div className="header__portfolio-content">
            <div className="content__project-portfolio">
            <div className="header__portfolio-content-wrapper">
              <div className="project__titles">
                <div className="portfolio__title-content">
                  <div className="portfolio__name__content">

                      <div className="project__names">
            {/*<div className="project__logo">
                          <img src={`${process.env.REACT_APP_DOMAIN}/${this.state.itemPortfolio.logotype}`} alt="" />
                        </div>*/}
                        <ScrollAnimation delay="50" animateIn="slideInUp" ><div className="category__project">
                          <p> {this.state.category}</p>
                        </div></ScrollAnimation>
                        <ScrollAnimation delay="250" animateIn="slideInUp" >
                        <div className="name__project">
                          <h4>{this.state.itemPortfolio.name}</h4>
                        </div></ScrollAnimation>

                      </div>
          <ScrollAnimation delay="550" animateIn="slideInUp" >
                      <div className="portfolio__description__content">
                        <div className="project_description__content">
                          <p className="description__project" dangerouslySetInnerHTML={{ __html: this.state.itemPortfolio.description }}>
                          </p>
                        </div>
                      </div>
          </ScrollAnimation>




                    <div className="portfolio__datatime__content">
                      <div className="portfolio__post-data">
                        <ScrollAnimation delay="750" animateIn="slideInUp" ><div className="watching__post">
                          <div className="icon-watching">
                            <div className="icon__blog" />
                            <p>{
                              this.state.itemPortfolio.views}</p>
                          </div>
                        </div></ScrollAnimation><ScrollAnimation delay="950" animateIn="slideInUp" >
                        <div className="time__post">
                          <div className="icon-timer">
                            <div className="icon__blog" />
                            <p><span><Translate>Developed in</Translate>:</span> {this.state.itemPortfolio.watching_time} <span><Translate>days</Translate></span></p>
                          </div>
                        </div></ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
</ScrollAnimation>
        <div className="content__project-portfolio">

          <div className="container__project-task">
          <div className="project__task_portfolio" >
             <ScrollAnimation animateIn="slideInUp" > <p dangerouslySetInnerHTML={{ __html: this.state.itemPortfolio.task }}>
              </p></ScrollAnimation>
            </div>
            <div className="name__task">
              <noindex><a href={this.state.itemPortfolio.projectlink} rel="nofollow" target="_blank">{this.state.itemPortfolio.projectlink}</a></noindex>
            </div>



          </div>

          <div className="portfolio__screen">

            <div className="portfolio__screen-wrapper">




              {Object.keys(this.state.attachImg).map((item) => {
                return (<ScrollAnimation animateIn="slideInUp" animateOnce="True">
                  <div className="portfolio__screen-item">
                    <img src={`${process.env.REACT_APP_DOMAIN}/${this.state.attachImg[item].content}`} alt="" />
                  </div></ScrollAnimation>
                )
              })
              }



            </div>
          </div>



          <div className="container__project-task">

            <div className="project__task_portfolio">
              <ScrollAnimation animateIn="slideInUp" ><p dangerouslySetInnerHTML={{ __html: this.state.itemPortfolio.decision }}>
              </p></ScrollAnimation>
            </div>



          </div>

          <div className="portfolio__screen">

            <div className="portfolio__screen-wrapper">

              {Object.keys(this.state.blocksImg).map((item) => {
                return (<ScrollAnimation animateIn="slideInUp" animateOnce="True">
                  <div className="portfolio__screen-item">
                    <img src={`${process.env.REACT_APP_DOMAIN}/${this.state.blocksImg[item].content}`} alt="" />
                  </div></ScrollAnimation>
                )
              })
              }
            </div>
          </div>



              {this.state.similarItems.length !== 0 ?
                <div className="portfolio__carousel-title">
              <ScrollAnimation animateIn="slideInUp">
                  <h2><Translate>Did you enjoy</Translate> {this.state.itemPortfolio.name}? <Translate>We have much more fascinationg experience for you</Translate></h2>
                </ScrollAnimation></div> : null
              }
              <div className="similar">
              {this.state.similarItems !== [] ? Object.values(this.state.similarItems).map((item, key) => {
      return (
          <Fragment>
          <ScrollAnimation animateIn="slideInUp" animateOnce="True">
        <div className="portfolio__similar_item-wrapper" style={{ backgroundImage: `url(${process.env.REACT_APP_DOMAIN}/${item.thumbnail})` }}>
<div class="header__portfolio-content"><div class="content__project-portfolio"><div class="header__portfolio-content-wrapper"><div class="project__titles"><div class="portfolio__title-content"><div class="portfolio__name__content"><div class="project__names"><ScrollAnimation animateIn="slideInUp" delay="200"><div class="next__project"><p><Translate>Next project</Translate></p></div></ScrollAnimation><div class="name__next"><h2>{item.name}</h2></div><div className="explore_next shining-underline"><Link to={`/${localStorage.getItem('lang')}/portfolio/${item.CURL}`}><Translate>Explore project</Translate><img class="arrow_next" src={arrowNext} alt=""/><span className="agrepullo"></span></Link></div></div></div></div></div></div></div></div>
            </div></ScrollAnimation>
        </Fragment>
               )

                      }) : null

                      }
               </div>

             {/*  <div className="container__slider-portfolio">
 <div className="portfolio__header_item-wrapper" style={{ backgroundImage: `url(${process.env.REACT_APP_DOMAIN}/${this.state.similarItems.thumbnail})` }}>
                        </div>
              <div className="sliderContent">
        <CarouselProvider
                    totalSlides={this.state.similarItems.length}
                    visibleSlides={3}
                    className={'slider__wrapper-portfolio'}
                  >
                    <Slider>

                      {this.state.similarItems != [] ? Object.values(this.state.similarItems).map((item, key) => {
                        return (
                          <Fragment>
                            <Slide index={key} classNameVisible={'styleCarousellImg'}>
                              <div className="grid">
                                <figure className="effect-marley similarItem">
                                  <Image src={`${process.env.REACT_APP_DOMAIN}/${item.thumbnail}`} alt="" />
                                  <figcaption>
                                    <h2>{item.name}</h2>
                                    {
                                      <Link to={`/${localStorage.getItem('lang')}/portfolio/${item.CURL}`}>Explore project</Link>

                                    }
                                  </figcaption>
                                </figure>

                              </div>
                            </Slide>
                          </Fragment>
                        )

                      }) : null

                      }

                    </Slider>

                  </CarouselProvider>
                </div>
              </div>*/}






        </div>

      </div>
<Footer/>
</Fragment>
    )
  }
}


export default compose (withLanguage, withRouter)(PortfolioItem)