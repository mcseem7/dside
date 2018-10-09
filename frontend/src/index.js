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
window.localStorage.setItem('lang', window.location.pathname.substr(1, 2) || initialLanguage)
const getIdentityDomen =  window.location.pathname





const render = (Component) => {
  return   ReactDOM.hydrate(
    <BrowserRouter >
      <Component {...this.props} domen={getIdentityDomen}/>
    </BrowserRouter>
    ,
    document.getElementById('root')
  )
};

render(App);



if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}