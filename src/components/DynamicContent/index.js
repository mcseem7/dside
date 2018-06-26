import React, {Component} from 'react'
import HeaderPost from './Header__Post'

export default class DynamicContent extends Component {
  constructor() {
    super()


  }


  render() {
    return(
        <div className="complex__content">
             <HeaderPost/>
        </div>
    )
  }
}