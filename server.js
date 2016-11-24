const {
  createServer,
  setConnection,
  addRoutes,
  startServer } = require('@matthewglover/hapi-wrapper');

const port = process.env.PORT || 4000;

createServer()
  .then(setConnection({ port }))
  .then(addRoutes())
  .then(startServer)
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(error => console.log(error));
