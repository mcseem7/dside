import React, { Component } from 'react'
import Layout from './components'
import './App.css'
import Footer from './components/Basic/Footer'

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
