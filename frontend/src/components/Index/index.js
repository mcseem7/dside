import React, { Component } from 'react'
import RootContent from '../RootContent/'
import Header from '../Basic/Header/'
import Footer from '../Basic/Footer'


export default class MainContent extends Component {
  constructor () {
    super()
  }

  render () {
    return (
        <Header/>
        <div className="wrapper___layout">
          <RootContent />
          <Footer/>
        </div>
    )
  }
}
