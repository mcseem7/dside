import React, { Component } from 'react'
import Main from '../DynamicContent/Main/index'
import { Switch, Route } from 'react-router-dom'
import Blog from '../DynamicContent/Blog'
import BlogItem from '../DynamicContent/BlogItem'
import PortfolioItem from '../DynamicContent/PortfolioItem'
import Portfolio from '../DynamicContent/Portfolio'
import NotFound from '../Basic/NotFound'
import ContactUs from '../CompanyPages/ContactUs'


export default class RootContent extends Component {
  constructor () {
    super()
  }


  render () {
    return (
      <div className="main__content">
        <Switch>
          <Route exact path="/dside" component={Main} />
          <Route path="/dside/blog" component={Blog} />
          <Route path="/dside/blog/:blogitem" component={BlogItem} />
          <Route path="/dside/portfolio" component={Portfolio} />
          <Route path="/dside/portfolio/:item" component={PortfolioItem} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
