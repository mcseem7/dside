import React, { Component } from 'react'
import './index.css'
import {Link} from 'react-router-dom'


export default class PortolioPost extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { imgPost, altImg } = this.props
    return (
      <div className="grid">
        <figure className="effect-marley">
          <img className="post__img" src={imgPost} alt={altImg}/>
              <figcaption>
                <h2>Block Petro Poroschenko</h2>
                <p>Work name</p>
                <Link to="/dside/portfolioitem">See project</Link>
              </figcaption>
        </figure>
        </div>
    )
  }
}
