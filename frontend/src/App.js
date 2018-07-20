import React, { Component } from 'react'
import Layout from './components'
import './components/App.css'
import Footer from './components/Basic/Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactUs from './components/CompanyPages/ContactUs'
import MainPages from './components/index'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Redirect from="/" to="/dside"/>
        <Switch>
          <Route  path="/dside" component={MainPages} />
          <Route  path="/contactus" component={ContactUs} />
        </Switch>
      </div>
    )
  }
}

export default App
