import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import baseStyles from './index'

export default () => injectGlobal`
  ${styledNormalize}
`

const render = () => {
  baseStyles()

  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
registerServiceWorker();
