import React, { Component,Fragment } from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import Translate, { reactTranslateChangeLanguage } from "translate-components";

 class PortolioPost extends Component {
    constructor(props) {
        super(props)


        this.state = {
            itemId: [],
            lang: ''
        }
    }

    componentDidMount() {
      this.setState({lang: localStorage.getItem('lang')})
      reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
    }



    render() {

      console.log(this.props)
    return (

<Fragment> {
  this.props.dataDside.map((item,key) => {
  return  <div className="grid">
      <figure className="effect-marley">
        <img src={`${process.env.REACT_APP_DOMAIN}/${item.thumbnail}`}
             alt={item.name}/>
        <figcaption>
          <h2>{item.name}</h2>
          {
            <Link to={`/${this.state.lang}/portfolio/${item.CURL}`}><Translate>Explore project</Translate></Link>

        }
        </figcaption>
      </figure>


    </div>
  })
}
</Fragment>
    )
  }

}

export default  PortolioPost
