
const path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
import { StaticRouter } from 'react-router'



import { createReactAppExpress } from '@cra-express/core';

const {default: App} = require('../src/App');
const clientBuildPath = path.resolve(__dirname, 'client');



function handleUniversalRender(req, res) {
    const context = {};
    const stream = ReactDOMServer.renderToNodeStream(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    if (context.url) {
        res.redirect(301, context.url);
        return;
    }

    if (typeof(window) == 'undefined') global.window = new Object();


    return stream;
}



const app = createReactAppExpress({
    clientBuildPath,
    universalRender: handleUniversalRender
});


module.exports = app;


