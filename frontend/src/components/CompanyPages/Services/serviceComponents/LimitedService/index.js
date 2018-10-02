import React, {Component, Fragment} from 'react'
import './index.css'
import LimitData from './LimitData'
import "babel-polyfill"
import OrderButton from "../OrderButton";


export default class LimitedService extends Component {
  constructor() {
    super()


      this.state = {
        offer: []
      }


  }


  async componentDidMount() {
     let response = await  fetch('//mydside.com/api/en/home/getLimitedOffers/')
     let limitOfer = await response.json()
     this.setState({offer: limitOfer})
  }




  render() {
    return(
        <Fragment>
            {this.state.offer.map(((item) => {
          return (<section className="limited__service">

            <div style={{backgroundImage: `url(//mydside.com${item.background})` }} className="limited__service-container">

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