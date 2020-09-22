const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    const { path, contentType, status } = request;
    
    if(path === '/') {
      socket.end(createResponse({ body: 'hi', contentType: 'text/html', status: '200 OK' }));
    } else if(path === '/echo') {
      socket.end(createResponse({ body: 'hi', contentType: 'text/html', status: '200 OK' }));
    } else if(path === '/red') {
      socket.end(createResponse({ body: '<html><body><h1>red</h1></body></html>', contentType: 'text/html', status: '200 OK' })); 
    } else
    

      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
