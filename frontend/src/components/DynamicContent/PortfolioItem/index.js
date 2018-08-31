import React, {Component, Fragment} from 'react'
import './index.css'
import logoProject from './rounded-rectangle-10.png'
import screenPortfolio from './layer-104.png'
import screenCitron from './layer-105.png'
import imgsl from './layer-106-copy.png'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from "react-router-dom";





export default class PortfolioItem extends Component {


  constructor (props) {
    super(props)

    this.state = {
      items: [],
      itemPortfolio: [],
        blocksImg: '',
        attachImg: '',
        similarItems: []
    }

  }







 componentDidMount() {
     return fetch(`http://mydside.com/api/en/portfolio/getPortfolioItemDetails/${this.props.match.params.portfolioitem}/`).then((response) => {
         return response.json()
     }).then((item) => {
         this.setState({itemPortfolio: item}, () => {
           for(let key in this.state.itemPortfolio.blocks ) {
             console.log(this.state.itemPortfolio.blocks)
            this.setState({blocksImg: this.state.itemPortfolio.blocks})
           }

            for(let key in this.state.itemPortfolio.attachment ) {
                 this.setState({attachImg: this.state.itemPortfolio.attachment[key].content})
             }


                 this.setState({similarItems: this.state.itemPortfolio.similar_items})

         })
     })

  }


  render () {
      console.log(this.state.similarItems)
    return (
      <div className="container__portfolio-item">

        <div className="portfolio__header_item-wrapper" style={{backgroundImage: `url(http://mydside.com/${this.state.itemPortfolio.main_image})`}}>
          <div className="header__portfolio-content">
            {/* <div className="project__picture"> */}
            {/* <img src="#" alt=""/> */}
            {/* </div> */}
            <div className="project__titles">
              <div className="portfolio__title-content">
                <div className="portfolio__name__content">
                  <div className="project__logo">
                    <img src={`http://mydside.com/${this.state.itemPortfolio.logotype}`} alt="" />
                  </div>
                  <div className="project__names">
                    <div className="category__project">
                      <p>websites</p>
                    </div>
                    <div className="name__project">
                      <h4>{this.state.itemPortfolio.name}</h4>
                    </div>

                    {/*<div className="name__customer">*/}
                      {/*<p>{this.state.itemPortfolio.name}</p>*/}
                    {/*</div>*/}
                  </div>
                </div>

                <div className="portfolio__description__content">
                  <div className="project_description__content">
                    <p className="name__description">Short project
                        description: <br />
                    </p>
                    <p className="description__project">
                      {this.state.itemPortfolio.description}
                    </p>
                  </div>
                </div>

                <div className="portfolio__datatime__content">
                  <div className="portfolio__post-data">
                    <div className="watching__post">
                      <div className="icon-watching">
                        <div className="icon__blog" />
                        <p>{
                          this.state.itemPortfolio.views}</p>
                      </div>
                    </div>
                    <div className="time__post">
                      <div className="icon-timer">
                        <div className="icon__blog" />
                        <p>{this.state.itemPortfolio.watching_time} <span>minutes</span></p>
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
            <p> {this.state.itemPortfolio.task}
            </p>
          </div>



        </div>

        <div className="portfolio__screen">

          <div className="portfolio__screen-wrapper">

            <div className="portfolio__screen-item">
                <img src={`http://mydside.com/${this.state.attachImg }`} />
            </div>
          </div>
        </div>



        <div className="container__project-task">

          <div className="name__task">
            <h4>OUR Decision</h4>
          </div>


          <div className="project__task_portfolio">
            <p>{this.state.itemPortfolio.decision}
            </p>
          </div>



        </div>

        <div className="portfolio__screen">

          <div className="portfolio__screen-wrapper">

              {Object.keys(this.state.blocksImg).map((item) => {
                return (
                    <div className="portfolio__screen-item">
                        <img src={`http://mydside.com/${this.state.blocksImg[item].content }`} alt=""/>
                    </div>
                )
              })

              }
          </div>
        </div>


        <div className="portfolio__carousel">

  <div className="portfolio__carousel-wrapper">
          <div className="portfolio__carousel-title">
            <h2>Other cases</h2>
          </div>


          <div className="container__slider-portfolio">

<div className="sliderContent">




    <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={405}
        totalSlides={4}
        visibleSlides={3}
    >
        <Slider>

            {this.state.similarItems != [] ?  Object.values(this.state.similarItems).map((  item, key) =>  {


                console.log(item)
                return (
                    <Fragment>
                    <Slide index={key} classNameVisible={'styleCarousellImg'}>
                    <div className="grid">
                    <figure className="effect-marley similarItem">
                        <Image src={`http://mydside.com/${item.thumbnail}`} alt=""/>
                <figcaption>
                    <h2>{item.name}</h2>
                    {
                        <Link to={`/portfolio/${item.CURL}`}>Explore project</Link>

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

        <div className="data__buttons">
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </div>
    </CarouselProvider>



</div>




          </div>


        </div>
        </div>




      </div>
      </div>

    )
  }
}
