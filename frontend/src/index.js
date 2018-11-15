import { loadComponents, getState } from 'loadable-components';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import baseStyles from './index'
import './index.css'
import 'regenerator-runtime/runtime';
import history from 'history/createBrowserHistory'
import { unregister } from './registerServiceWorker';
import routes from './routes'
import Helmet, { HelmetProvider } from 'react-helmet-async';

const nowLang = localStorage.getItem('lang')

const countryCode = ['ru', 'cz', 'pl', 'en'].filter((code) => {
  return code == window.location.pathname.substr(1,2) 
})

localStorage.setItem('lang',  countryCode || nowLang)
const getIdentityDomen = window.location.pathname
const data = window.__INITIAL_DATA__;


ReactDOM.hydrate(
    <HelmetProvider>
      <BrowserRouter >
        <App {...this.props} nowLang={nowLang} domen={getIdentityDomen} initialData={data} routes={routes} />
      </BrowserRouter>
    </HelmetProvider>
    ,
    document.getElementById('root') 
 )

 unregister()