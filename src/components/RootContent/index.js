import React, {Component} from 'react'
import Main from '../DynamicContent/Main/index'
import {Switch, Route} from 'react-router-dom'
import Blog from '../DynamicContent/Blog'
import NotFound from '../Basic/NotFound'

export default class RootContent extends Component {
  constructor() {
    super()


  }


  render() {
    return(
        <div className="main__content">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route  path="/blog" component={ Blog}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    )
  }
}