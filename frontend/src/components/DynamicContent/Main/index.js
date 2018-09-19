import React, { Component } from 'react'
import HeaderPost from '../Header__Post/index'
import About from './About__block/index'
import Works from './Works__Company/index'
import Services from './Services/index'

import {Route} from 'react-router-dom'
export default class Main extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
console.log(this.props)
    return (
      <div className="complex__content">
        <HeaderPost dataLang={this.props.match.path} />
        <Works  />
        <Services {...this.props} />
      </div>
    )
  }
}
