const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
import { StaticRouter } from 'react-router'
import 'localstorage-polyfill'
import { getInitialData } from '@cra-express/router-prefetcher';
import { createReactAppExpress } from '@cra-express/core';
const {default: App} = require('../src/App');
const clientBuildPath = path.resolve(__dirname, '../client');
import routes from '../src/routes'


let AppClass = App;
let serverData;
const app = createReactAppExpress({
  clientBuildPath,
  universalRender: handleUniversalRender,
  onEndReplace(html) {
    return html.replace(
      '{{SCRIPT}}',
      `<script>
        window.__INITIAL_DATA__ = ${JSON.stringify(serverData).replace(
          /</g,
          '\\u003c'
        )};
      </script>`
    );
  }
});

function handleUniversalRender(req, res) {
  const context = {};
 
  return getInitialData(req, res, routes)
    .then(data => {
      serverData = data;
    
      const app = (
        <StaticRouter location={req.url} context={context}>
            <AppClass routes={routes} initialData={data} />
        </StaticRouter>
      );
      
        return ReactDOMServer.renderToNodeStream(app);
 
    })
    .catch(err => {
      console.error(err);
      res.send(500);
    });
}


if (module.hot) {
    module.hot.accept('../src/App', () => {
      const { default: App } = require('../src/App');
      AppClass = App;
      console.log('✅ Server hot reloaded App');
    });
    module.hot.accept('../src/routes', () => {
      console.log('✅ Server hot reloaded routes');
    });
  }

module.exports = app;


