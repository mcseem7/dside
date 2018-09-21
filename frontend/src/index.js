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
import 'regenerator-runtime/runtime';
import history from 'history/createBrowserHistory'

const initialLanguage = 'en'



const getIdentityDomen = window.location.pathname !== undefined ? window.location.pathname : initialLanguage
localStorage.setItem('lang', getIdentityDomen.substr(1, 2))
    ReactDOM.hydrate(
            <BrowserRouter  >
                <App {...this.props} domen={getIdentityDomen} />
            </BrowserRouter>
            ,
            document.getElementById('root')
        );


