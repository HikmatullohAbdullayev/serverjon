const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 2003; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);


// GET /posts?_page=1&_per_page=25
// GET /posts?_start=10&_end=20
// GET /posts?_start=10&_limit=10