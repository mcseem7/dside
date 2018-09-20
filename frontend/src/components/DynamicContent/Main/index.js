import React, { Component } from 'react'
import HeaderPost from '../Header__Post/index'
import About from './About__block/index'
import Works from './Works__Company/index'
import Services from './Services/index'
import {Route} from 'react-router-dom'

const LangContext = React.createContext({
    value: '10'
})




export default class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
        langVars: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
     this.setState({langVars: this.props})
  }


  render () {


    return (
      <div className="complex__content">
        <HeaderPost lang={this.state.langVars} />
        <Works  {...this.props} />
        <Services {...this.props} />
      </div>

    )
  }
}

export const LangContextConsumer = LangContext.Consumer