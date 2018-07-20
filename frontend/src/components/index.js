import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import MainContent from './Index/'
import Footer from './Basic/Footer'

class MainPages extends Component {
  render () {
    return (
        <div className="main__pages">
          <div className="container">
            <MainContent />
          </div>
          <Footer />
        </div>
    )
  }
}

export default MainPages
