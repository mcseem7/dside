import { loadComponents, getState } from 'loadable-components';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import baseStyles from './index'
import './index.css'
import { unregister } from './registerServiceWorker';

export default () => injectGlobal`
  ${styledNormalize}
`





        ReactDOM.hydrate(

            <BrowserRouter>
                <App {...this.props} />
            </BrowserRouter>
            ,
            document.getElementById('root')
        );



