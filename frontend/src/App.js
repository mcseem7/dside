import React, { Component } from 'react'
import Layout from './components'
import './components/App.css'
import Footer from './components/Basic/Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactUs from './components/CompanyPages/ContactUs'
import MainPages from './components/index'
import LogoPage from './components/CompanyPages/Services/logos'
import BrandPage from './components/CompanyPages/Services/branding'
import VideoPage from './components/CompanyPages/Services/videos'
import Website from './components/CompanyPages/Services/websites'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

class App extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render () {
    return (
      <div className="App">
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1000} classNames="fade">
              <Switch>
                <Redirect exact from="/" to="/dside"/>
                <Route path="/dside" component={MainPages} />
                <Route path="/services/logo" component={LogoPage} />
                <Route path="/services/brand" component={BrandPage} />
                <Route path="/services/videos" component={VideoPage} />
                <Route path="/services/website" component={Website} />
                <Route path="/services/contactus" component={ContactUs} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </div>
    )
  }
}

export default App
