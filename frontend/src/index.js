import { loadComponents, getState } from 'loadable-components';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route,withRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import baseStyles from './index'
import './index.css'


import history from 'history/createBrowserHistory'



const getIdentityDomen = window.location.hostname.split('.')[1] !== undefined ? window.location.hostname.split('.')[1] : 'pl'


    ReactDOM.hydrate(
            <BrowserRouter basename={getIdentityDomen == 'com' ? window.navigator.languages[1] : null} >
                <App {...this.props} domen={getIdentityDomen} />
            </BrowserRouter>
            ,
            document.getElementById('root')
        );


