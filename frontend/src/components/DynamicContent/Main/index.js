import React, { Component } from 'react'
import HeaderPost from '../Header__Post/index'
import About from './About__block/index'
import Works from './Works__Company/index'
import Services from './Services/index'

import {Route} from 'react-router-dom'
export default class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
        mainData: {
            en: {
                enWhat: 'What?'
            },
            pl: {
                plWhat: 'Как?'
            },
            cz: {
                czWhat: 'Что?'
            },
            ru: {
                ruWhat: 'Откуда?'
            }
        }
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {

    return (
      <div className="complex__content">
        <HeaderPost dataLang={this.props.match.path} textData={this.state.mainData} />
        <Works  />
        <Services {...this.props} />
      </div>
    )
  }
}
