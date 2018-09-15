import React, { Component } from 'react'
import Main from '../DynamicContent/Main/index'
import { Switch, Route, Redirect } from 'react-router-dom'
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

      console.log(this.props)
    return (
      <div className="main__content">
        <Switch >

            <Route exact path={`/${localStorage.getItem('lang')}`}  component={Main} />
            <Route exact path={`/${localStorage.getItem('lang')}/aboutus`}  component={AboutUs} />
            <Route exact path={`/${localStorage.getItem('lang')}/blog`}  component={Blog} />
            <Route exact path={`/${localStorage.getItem('lang')}/blog/:blogitem`} component={BlogItem} />
            <Route exact path={`/${localStorage.getItem('lang')}/portfolio`} component={Portfolio} />
            <Route exact path={`/${localStorage.getItem('lang')}/portfolio/:portfolioitem`}  component={PortfolioItem} />
            <Route exact path={`/`}  component={Main} />
        </Switch>
      </div>
    )
  }
}
