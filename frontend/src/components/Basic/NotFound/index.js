import './css/style.css'
import meteor from './meteor.svg'
import four from './404.svg'
import astro from './astronaut.svg'
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Translate from "translate-components";

 class NotFound extends Component {

  render () {

    return (
      <div>
        
    <div className="installation">
      <div className="mars"></div>
        <img src={four} className="logo-404" alt=""/>
        <img src={meteor} className='meteor' alt="" />
            <p className='title'><Translate>Oh no!!</Translate></p>
            <p className='subtitle'>
	            <Translate>You’re either misspelling the URL</Translate><br /><Translate> or requesting a page that’s no longer here.</Translate>
            </p>
            <div align='center'>
            	<a className='btn-back' onClick={
                () =>  this.props.history.goBack()
              } ><Translate useRawText={true}>Back to previous page</Translate></a>
            </div>
            <img src={astro} className="astronaut" alt="" />
      </div>
      </div>
    )
  }
}


export default withRouter(NotFound)