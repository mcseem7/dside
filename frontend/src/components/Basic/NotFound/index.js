import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

 class NotFound extends Component {
  constructor () {
    super()
  }

  render () {
     const {location} = this.props
    return (
      <div>
        {location.pathname.match(/services\//gi) ? <Header/> : null}
        <p>Данной страницы не существует зайдите попозже)</p>
        {location.pathname.match(/services\//gi) ? <Footer/> : null}
      </div>
    )
  }
}


export default withRouter(NotFound)