import React, { Component } from 'react'
import './index.css'
import Slider from "react-slick";
import logoProject from './rounded-rectangle-10.png'
import screenPortfolio from './layer-104.png'
import screenCitron from './layer-105.png'
import imgsl from './layer-106-copy.png'




export default class PortfolioItem extends Component {
  constructor () {
    super()

    this.state = {
      items: []
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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

  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }


  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:true,
      slidesToShow: 3,
      slidesToScroll: 1,

    };


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
                      <h4>Create brand</h4>
                    </div>

                    <div className="name__customer">
                      <p>CiTRON European USB Warehouse</p>
                    </div>
                  </div>
                </div>

                <div className="portfolio__description__content">
                  <div className="project_description__content">
                    <p className="name__description">Short project
                        description: <br />
                    </p>
                    <p className="description__project"> Cоздать веб-сайт с минималистичным, качественным дизайном, с каталогом продуктов.  Сделать удобный конфигуратор для USB-накопителей
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
            <p>Cоздать веб-сайт с минималистичным, качественным дизайном, с каталогом продуктов.  Сделать удобный конфигуратор для USB-накопителей
            </p>
          </div>



        </div>

        <div className="portfolio__screen">

          <div className="portfolio__screen-wrapper">

            <div className="portfolio__screen-item">
              <img src={screenPortfolio} alt=""/>
            </div>
          </div>
        </div>



        <div className="container__project-task">

          <div className="name__task">
            <h4>OUR Decision</h4>
          </div>


          <div className="project__task_portfolio">
            <p>В качестве основы используется сильный черно-белый стиль. За счет цветов, дизайн не только отлично смотрится, но и вполне достойно считывается конечным потребителем, который теперь испытывает ощущение того, что продукция CiTRON высококачественна и технологична.
            </p>
          </div>



        </div>

        <div className="portfolio__screen">

          <div className="portfolio__screen-wrapper">

            <div className="portfolio__screen-item">
              <img src={screenCitron} alt=""/>
            </div>
          </div>
        </div>


        <div className="portfolio__carousel">

  <div className="portfolio__carousel-wrapper">
          <div className="portfolio__carousel-title">
            <h2>Other cases</h2>
          </div>


          <div className="container__slider-portfolio">

            <div className="item-slide" onClick={this.previous}>>

            </div>

            <Slider  ref={c => (this.slider = c)}  {...settings}>

                <div className="slider-item__portfolio">
                  <div className="item_slider">
                    <img src={imgsl} alt=""/>
                  </div>
                </div>

              <div className="slider-item__portfolio">
                <div className="item_slider">
                  <img src={imgsl} alt=""/>
                </div>
              </div>

              <div className="slider-item__portfolio">
                <div className="item_slider">
                  <img src={imgsl} alt=""/>
                </div>
              </div>

            </Slider>

          </div>


        </div>
        </div>


      </div>

      </div>

    )
  }
}
