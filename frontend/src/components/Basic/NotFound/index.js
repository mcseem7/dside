import './css/style.css'
import meteor from './meteor.svg'
import four from './404.svg'
import astro from './astronaut.svg'
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import Translate from "translate-components";

 class NotFound extends Component {
  constructor () {
    super()
  }

  render () {
     const {location} = this.props
    return (
      <div>
        {location.pathname.match(/services\//gi) ? <Header/> : null}
<div className="installation">
  <div className="mars"></div>
        <img src={four} className="logo-404" />
        <img src={meteor} className='meteor' />
            <p className='title'><Translate>Oh no!!</Translate></p>
            <p className='subtitle'>
	            <Translate>You’re either misspelling the URL</Translate><br /><Translate> or requesting a page that’s no longer here.</Translate>
            </p>
            <div align='center'>
            	<a className='btn-back' href="https://mydside.com/"><Translate>Back to previous page</Translate></a>
            </div>
            <img src={astro} className="astronaut" />
</div>

      </div>
    )
  }
}


export default withRouter(NotFound)