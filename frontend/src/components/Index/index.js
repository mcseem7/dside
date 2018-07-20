import React, { Component } from 'react'
import RootContent from '../RootContent/'
import Header from '../Basic/Header/'

export default class MainContent extends Component {
  constructor () {
    super()
  }

  render () {
    return (
        <div className="wrapper___layout">
          <Header />
          <RootContent />
        </div>
    )
  }
}
