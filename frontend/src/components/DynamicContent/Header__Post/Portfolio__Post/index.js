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
      <div className="portolio__post">
        <div className="portfolio__post-wrapper">
          <img className="post__img" src={imgPost} alt={altImg}/>
              <div className="effect-marley">
                <h2>Block Petro Poroschenko</h2>
                <p>Work name</p>
                <Link to="/">See project</Link>
              </div>
        </div>
      </div>
    )
  }
}
