import React, {Component, Fragment} from 'react'
import './index.css'
import LimitData from './LimitData'
import "babel-polyfill"
import OrderButton from "../OrderButton";
import withLanguage from '../../../../../HOC/withLanguage';


 class LimitedService extends Component {
  constructor() {
    super()


      this.state = {
        offer: []
      }


  }


  async componentDidMount() {
     let response = await  fetch(
      `${process.env.REACT_APP_API}/${
        this.state.lang
      }/home/getLimitedOffers/`)
     let limitOfer = await response.json()
     this.setState({offer: limitOfer})
  }




  render() {
    console.log(this.state.offer)
    return(
        <Fragment>
            {this.state.offer.map(((item) => {
          return (<section className="limited__service">

            <div style={{backgroundImage: `url(${process.env.REACT_APP_DOMAIN}${item.background})` }} className="limited__service-container">

              <div className="limited__service_form-data">

                <div className="limit__offer-title">
                  <h3>{item.title}</h3>
                </div>


                <div className="discount__offer-title">
                  <h2>{item.description}</h2>
                </div>


                <div className="form__order__container">


                         <LimitData limitData={item}/>

                </div>



              </div>


            </div>

          </section> )
            }))
            }
        </Fragment>
    )
  }
}

export default withLanguage(LimitedService)