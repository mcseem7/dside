import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import './index.css'
import 'regenerator-runtime/runtime';
import  { unregister } from './registerServiceWorker';
import routes from './routes'
import { HelmetProvider } from 'react-helmet-async';

const nowLang = localStorage.getItem('lang')
const countryCode = ['ru', 'pl', 'en'].filter((code) => {
  return code == window.location.pathname.substr(1,2)
})
localStorage.setItem('lang', countryCode || nowLang)
const getIdentityDomen = window.location.pathname
const data = window.__INITIAL_DATA__;
ReactDOM.hydrate(
    <HelmetProvider>
      <BrowserRouter >
        <App {...this.props} domen={getIdentityDomen} initialData={data} routes={routes} />
      </BrowserRouter>
    </HelmetProvider>
    ,
    document.getElementById('root') 
 )

unregister()