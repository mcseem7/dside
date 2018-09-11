const app = require('./app');
const PORT = process.env.PORT || 3001;
// import express from 'express'
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import { StaticRouter } from 'react-router-dom'
// import App from '../src/App'
// const app = express()
// import { getLoadableState } from 'loadable-components/server'
//
// app.use(async (req, res) => {
//     try {
//         const routerContext = {}
//         const reactApp = (
//             <StaticRouter context={routerContext} location={req.url}>
//                 <App />
//             </StaticRouter>
//         )
//         const loadableState = await getLoadableState(reactApp)
//         const stream = ReactDOMServer.renderToNodeStream(reactApp)
//         res.write(`<!DOCTYPE html><html><body><div id="root">`)
//         stream.pipe(
//             res,
//             { end: false },
//         )
//         stream.on('end', () => {
//             res.end(
//                 `</div>${loadableState.getScriptTag()}<script src="bundle.js"></script></body></html>`,
//             )
//         })
//     } catch (err) {
//         res.status(500)
//         res.send(err.stack)
//     }
// })


app.listen(PORT, () => {
  console.log(`CRA Server listening on port ${PORT}!`);
});
