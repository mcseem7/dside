import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import baseStyles from './index'
import './index.css'


export default () => injectGlobal`
  ${styledNormalize}
`



const render = () => {
  baseStyles()

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render()
registerServiceWorker()
