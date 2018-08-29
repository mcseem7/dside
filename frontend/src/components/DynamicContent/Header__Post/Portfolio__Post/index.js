import React, { Component,Fragment } from 'react'
import './index.css'
import {Link} from 'react-router-dom'


export default class PortolioPost extends Component {
  constructor (props) {
    super(props)

  }

  componentDidMount() {
    console.log(this.props)
  }




  render () {
    return (
<Fragment> {
  this.props.dataItem.map((item,key) => {
  return  <div className="grid">
              <Link to={`/dside/${this.props.dataDside[0].id}`}>
      <figure className="effect-marley">
        <img src={`http://mydside.com/${item.thumbnail_image}`}
             alt={item.name}/>
        <figcaption>
          <h2>{item.name}</h2>
          <Link to={`/dside/${this.props.dataDside[0].id}`}>Explore project</Link>
        </figcaption>
      </figure>
          </Link>
    </div>
  })
}
</Fragment>
    )
  }
}
