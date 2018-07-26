import React, { Component } from 'react'
import Layout from './components'
import './components/App.css'
import Footer from './components/Basic/Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactUs from './components/CompanyPages/ContactUs'
import MainPages from './components/index'
import Blog from './components/DynamicContent/Blog'
import BlogItem from './components/DynamicContent/BlogItem'
import PortfolioItem from './components/DynamicContent/PortfolioItem'
import Portfolio from './components/DynamicContent/Portfolio'
import Main from './components/DynamicContent/Main/index'
import Header from './components/Basic/Header'
import LogoPage from './components/CompanyPages/Services/logos'
import BrandPage from './components/CompanyPages/Services/branding'
import VideoPage from './components/CompanyPages/Services/videos'
import Website from './components/CompanyPages/Services/websites'

class App extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

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
          <Route path="/logo" component={LogoPage} />
          <Route path="/brand" component={BrandPage} />
          <Route path="/videos" component={VideoPage} />
          <Route path="/website" component={Website} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App
