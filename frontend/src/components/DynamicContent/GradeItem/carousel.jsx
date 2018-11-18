import React, {Component, Fragment} from 'react'
import { CarouselProvider, CarouselInjectedProps, Slider, Slide, ButtonBack, ButtonNext, Image, WithStore } from 'pure-react-carousel';
import moment from 'moment'
import Review from './grade__review.png'

class Carousel  extends Component {
    constructor() {
        super()

        this.state = {
            currentSlide: 0
        }
    }

   getStateSlider = () => {
    this.setState(prevState => {
        return {currentSlide: prevState.currentSlide > 1 ? 0 : prevState.currentSlide + 1}
      }, () => {
          this.props.onChange(this.state.currentSlide)
      });
       this.props.carouselStore.setStoreState({ currentSlide: this.state.currentSlide }, () => {
       this.props.onChange(this.state.currentSlide)
    });
}

    render() {
        return (
            <Fragment>
            <Slider >
            { this.props.gradeItem.map((item, key) => {
                return (
                  <Slide  index={key} className='recent__grade'>
                  <div className='recent__grade-wrapper'  onClick={() => {
                       this.props.history.push({
                         pathname: `/${this.props.language}/grade/${item.id}`
                       })
                      }}>
                  <div className='recent__grade-img'>
                  {/* <Image alt="" src={`${process.env.REACT_APP_DOMAIN}${item.graded_by.avatar}`} /> */}
                  <Image alt="" src={`${process.env.REACT_APP_DOMAIN}${item.background}`} />
                  </div> 
                  <div className='recent__grade-date'>
                  <span>{moment(item.date).format("D MMM")}</span>
                  </div>
                  </div> 
                  </Slide>
                )
          
            })}
        </Slider>
       <div className='earlier__button' onClick={this.getStateSlider}> 
               <button className='get-earlier__button'>
                  <div>earlier</div>
               </button>
               </div> 
               </Fragment>
        )
    }
}

 const NewSlides = WithStore(Carousel,  state => ({
    currentSlide: state.currentSlide,
    totalSlides: state.totalSlides,
    visibleSlides: state.visibleSlides
  }))



export default class  extends Component {
    constructor(props) {
        super(props) 


        this.state = {
            currentSlide: 0,
            current: false
        }
    }

   
   getCurrent = (props) => {
     this.setState({currentSlide: props})
   }
 
    render() {
      
        return (
           
            <Fragment> 
                
                    <CarouselProvider
                      visibleSlides={3}
                      totalSlides={this.props.gradeItem.length}
                      naturalSlideWidth={100}
                      naturalSlideHeight={90}
                      currentSlide={this.state.currentSlide}
                      orientation='vertical'
                      touchEnabled={false}
                      dragEnabled={false}
                      className={'slider__wrapper-grade'}
                  >
                  
            <NewSlides onChange={() => this.getCurrent()}  {...this.props}/>
              </CarouselProvider>
            </Fragment>
        )
    }
}


