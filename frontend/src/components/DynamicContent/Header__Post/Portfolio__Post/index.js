import React, { Component,Fragment } from 'react'
import './index.css'
import {Link} from 'react-router-dom'


export default class PortolioPost extends Component {
  constructor (props) {
    super(props)

  }




  render () {
     console.log(this.props)
    return (
<Fragment> {
  this.props.dataItem.map((item,key) => {
  return  <div className="grid">
      <figure className="effect-marley">
        <img src={`http://mydside.com/${item.main_image}`}
             alt={item.name}/>
        <figcaption>
          <h2>{item.name}</h2>
          {this.props.dataDside.map((items) => {
            return (
              <Link to={`/portfolio/${items.id}`}>Explore project</Link>
            )
          })
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
