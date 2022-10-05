const http = require('http'),
      config = require('./config.json')


let requestHandler = (request, response) => {
  response.writeHead(200);
  response.end(request.socket.remoteAddress);
}

const server = http.createServer(requestHandler);
server.listen(config.port, '0.0.0.0');