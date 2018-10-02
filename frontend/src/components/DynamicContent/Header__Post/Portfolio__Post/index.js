import React, { Component,Fragment } from 'react'
import './index.css'
import {Link} from 'react-router-dom'
const renderReact = require('hypernova-react').renderReact;

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
    }



    render() {


    return (

<Fragment> {
  this.props.dataItem.map((item,key) => {
  return  <div className="grid">
      <figure className="effect-marley">
        <img src={`//mydside.com/${item.thumbnail}`}
             alt={item.name}/>
        <figcaption>
          <h2>{item.name}</h2>
          {
              <Link to={`/${this.state.lang}/portfolio/${item.CURL}`}>Explore project</Link>

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
