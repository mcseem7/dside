import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class NotFound extends Component {
  constructor () {
    super()
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <p>Данной страницы не существует зайдите попозже)</p>
      </div>
    )
  }
}


export default withRouter(NotFound)