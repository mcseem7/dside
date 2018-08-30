import React, { Component,Fragment } from 'react'
import './index.css'
import {Link} from 'react-router-dom'


export default class PortolioPost extends Component {
    constructor(props) {
        super(props)


        this.state = {
            itemId: []
        }
    }




    render() {


    return (
<Fragment> {
  this.props.dataItem.map((item,key) => {
  return  <div className="grid">
      <figure className="effect-marley">
        <img src={`http://mydside.com/${item.thumbnail}`}
             alt={item.name}/>
        <figcaption>
          <h2>{item.name}</h2>
          {
              <Link to={`/portfolio/${item.CURL}`}>Explore project</Link>

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
