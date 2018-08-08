import React, { Component } from 'react'
import Main from '../DynamicContent/Main/index'
import { Switch, Route, Redirect } from 'react-router-dom'
import Blog from '../DynamicContent/Blog'
import BlogItem from '../DynamicContent/BlogItem'
import PortfolioItem from '../DynamicContent/PortfolioItem'
import Portfolio from '../DynamicContent/Portfolio'
import AboutUs from '../DynamicContent/About'
import NotFound from '../Basic/NotFound'
import Drilldown from 'react-router-drilldown'

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
          <Drilldown transitionDuration="900" transitionTimingFunction="ease-in-out" viewportClassName="agrepullo" prefix="agrepullo">
          <Route exact path="/dside" component={Main} />
            <Route path="/dside/aboutus" component={AboutUs} />
            <Route path="/dside/portfolio" component={Portfolio} />
            <Route path="/dside/portfolioitem" component={PortfolioItem} />
          <Route exact path="/dside/blog" component={Blog} />
          <Route exact path="/dside/blog/:blogitem" component={BlogItem} />
          </Drilldown>
        </Switch>
      </div>
    )
  }
}
