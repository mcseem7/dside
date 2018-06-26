import React, {Component} from 'react'
import DynamicContent from '../DynamicContent'

export default class RootContent extends Component {
  constructor() {
    super()


  }


  render() {
    return(
        <div className="complex__content">
            <DynamicContent/>
        </div>
    )
  }
}