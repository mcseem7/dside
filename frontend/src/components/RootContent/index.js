import React, { Component } from 'react'
import Main from '../DynamicContent/Main/index'
import { Switch, Route, Redirect } from 'react-router-dom'
import Blog from '../DynamicContent/Blog'
import BlogItem from '../DynamicContent/BlogItem'
import PortfolioItem from '../DynamicContent/PortfolioItem'
import Portfolio from '../DynamicContent/Portfolio'
import AboutUs from '../DynamicContent/About'
import NotFound from '../Basic/NotFound'
import Fader from 'react-fader'

export default class RootContent extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }

  render () {
    function forceTrailingSlash(nextState, replace) {
      const path = nextState.location.pathname;
      if (path.slice(-1) !== '/') {
        replace({
          ...nextState.location,
          pathname: path + '/'
        });
      }
    }
    return (
      <div className="main__content">
        <Switch >
            <Route exact path="/" component={Main} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:blogitem" component={BlogItem} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolio/:portfolioitem" component={PortfolioItem} />
        </Switch>
      </div>
    )
  }
}
