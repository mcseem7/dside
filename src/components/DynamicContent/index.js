import React, {Component} from 'react'
import HeaderPost from './Header__Post'
import About from './About__block'
import Works from './Works__Company/index';
import Services from './Services'
export default class DynamicContent extends Component {
  constructor() {
    super()


  }


  render() {
    return(
        <div className="complex__content">
             <HeaderPost/>
              <About/>
             <Works/>
            <Services/>
        </div>
    )
  }
}