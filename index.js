const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//we are using node http module using require
//http module supports mehtod called creterServer to creater server
//req parameters give us access to header from incoming http files from server
//statusCode enables us to set status for incoming text/html files
//end endsthe response and sends response to client
//server.listen will start the listening port
//to use a variable in link use backquotes instead of normal ports ``