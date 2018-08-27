import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import MainContent from './Index/'


class MainPages extends Component {
  render () {
    return (
        <div className="main__pages">
          <div className="container">
            <MainContent />
          </div>

        </div>
    )
  }
}

export default MainPages
