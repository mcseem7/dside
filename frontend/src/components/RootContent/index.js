import React, { Component } from 'react'
import Main from '../DynamicContent/Main/index'
import { Switch, Route, Redirect } from 'react-router-dom'
import Blog from '../DynamicContent/Blog'
import BlogItem from '../DynamicContent/BlogItem'
import PortfolioItem from '../DynamicContent/PortfolioItem'
import Portfolio from '../DynamicContent/Portfolio'
import NotFound from '../Basic/NotFound'
import ContactUs from '../CompanyPages/ContactUs'


export default class RootContent extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }

  render () {

    return (
      <div className="main__content">
        <Switch>
          <Route exact path="/dside" component={Main} />
          <Route path="/dside/blog" component={Blog} />
          <Route exact path="/dside/blog/:blogitem" component={BlogItem} />
          <Route path="/dside/portfolio" component={Portfolio} />
          <Route path="/dside/portfolioitem" component={PortfolioItem} />
        </Switch>
      </div>
    )
  }
}
