const app = require('../app');
const debug = require('debug')('mevn-app:server');
const http = require('http');



//normalize a port into a number
const normalizePort = (val) => {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        //named pip
        return val;
    }

    if (port >= 0) {
        //port number
        return port;
    }

    return false;
}

const port = normalizePort(process.env.port || '1776');
app.set('port', port);

const server = http.createServer(app);


//event listener for HTTP server "error" event
const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

    //handle specific listen errors with messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break;
        default: 
            throw error;
    }
}


//listen on provided port, on all network interfaces
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



//event listener for HTTP server "listening" event
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }