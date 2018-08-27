import React, { Component } from 'react'
import './index.css'

export default class PortolioPost extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { imgPost, altImg } = this.props
    return (
      <div className="portolio__post">
        <div className="portfolio__post-wrapper">
          <img className="post__img" src={imgPost} alt={altImg} />
        </div>
      </div>
    )
  }
}
