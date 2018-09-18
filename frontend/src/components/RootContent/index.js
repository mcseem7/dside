import React, { Component } from 'react'
import Main from '../DynamicContent/Main/index'
import { Switch, Route, Redirect,withRouter } from 'react-router-dom'
import Blog from '../DynamicContent/Blog'
import BlogItem from '../DynamicContent/BlogItem'
import PortfolioItem from '../DynamicContent/PortfolioItem'
import Portfolio from '../DynamicContent/Portfolio'
import AboutUs from '../DynamicContent/About'
import NotFound from '../Basic/NotFound'


export default class RootContent extends Component {
  constructor (props) {
    super(props)

  }

  componentDidMount() {
    console.log(this.props)
  }

  render () {
    const langId = '/pl'
    return (
      <div className="main__content">
          <Route  path={`/${langId}/aboutus`}  component={AboutUs} />
          <Route exact path={`/${langId}/blog`}  component={Blog} />
          <Route exact path={`/${langId}/blog/:blogitem`} component={BlogItem} />
          <Route exact path={`/${langId}/portfolio`} component={Portfolio} />
          <Route exact  path={`/${langId}/portfolio/:portfolioitem`}  component={PortfolioItem} />
      </div>
    )
  }
}
