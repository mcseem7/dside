import React, { Component } from 'react'
import Main from '../DynamicContent/Main/index'
import { Switch, Route } from 'react-router-dom'
import Blog from '../DynamicContent/Blog'
import BlogItem from '../DynamicContent/BlogItem'
import PortfolioItem from '../DynamicContent/PortfolioItem'
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
          <Route path="/contactus" component={ContactUs} />
          <Route exact path="/" component={Main} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog_item" component={BlogItem} />
          <Route path="/portfolio_item" component={PortfolioItem} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
