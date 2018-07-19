import React, { Component } from 'react'
import Layout from './components'
import './App.css'
import Footer from './components/Basic/Footer'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="container">
          <Layout />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
