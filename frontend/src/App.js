import React, { Component } from 'react'
import Layout from './components'
import './components/App.css'
import Footer from './components/Basic/Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactUs from './components/CompanyPages/ContactUs'
import MainPages from './components/index'
import LogoPage from './components/CompanyPages/Services/logos'
import Blog from './components/DynamicContent/Blog'
import BlogItem from './components/DynamicContent/BlogItem'
import PortfolioItem from './components/DynamicContent/PortfolioItem'
import Portfolio from './components/DynamicContent/Portfolio'
import Main from './components/DynamicContent/Main/index'
import Header from './components/Basic/Header'
import BrandPage from './components/CompanyPages/Services/branding'

class App extends Component {
  render () {
    return (
      <div className="App">
        {/*<Redirect from="/" to="/dside"/>*/}
        <Header/>
        <Switch>
          {/*<Route exact path="/" component={MainPages} />*/}
          {/*<Route  path="/contactus" component={ContactUs} />*/}
          {/*<Route  path="/logo" component={LogoPage} />*/}
          <Route exact path="/" component={Main} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogitem" component={BlogItem} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/portfolioitem" component={PortfolioItem} />
          <Route  path="/logo" component={LogoPage} />
          <Route path="/brand" component={BrandPage} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App
