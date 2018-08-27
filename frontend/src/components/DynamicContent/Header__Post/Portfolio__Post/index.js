import React, { Component,Fragment } from 'react'
import './index.css'
import {Link} from 'react-router-dom'


export default class PortolioPost extends Component {
  constructor (props) {
    super(props)

  }





  render () {
    return (
<Fragment> {
  this.props.dataItem.map((item,key) => {
  return  <div className="grid">
      <figure className="effect-marley" style="background: url('{item.main_image}')">
        <img src={`http://mydside.com/${item.main_image}`}
             alt={item.name}/>
        <figcaption>
          <h2>{item.name}</h2>
          <Link className="shining-underline" to={`/dside/${key + 1}`}>Explore project<span></span></Link>
        </figcaption>
      </figure>
    </div>
  })
}
</Fragment>
    )
  }
}
