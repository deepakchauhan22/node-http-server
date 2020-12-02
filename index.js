const http = require('http');

const hostname = 'localhost';
const port = 3000;
const fs =require('fs');
const path =require('path')

const server = http.createServer((req, res) => {
    //console.log(req.headers);
    console.log('Request for ' + req.url + ' by method ' + req.method);
    if(req.method == 'GET'){
        var fileUrl;
        if(req.url == '/')  fileUrl = '/index.html'
        else fileUrl = req.url;
        

        var filePath= path.resolve('./public' + fileUrl);
        const fileExt= path.extname(filePath);
        if(fileExt == '.html'){
            fs.exists(filePath, (exists)=>{
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html')
                    res.end('<html><body><h1> Error 404 '+fileUrl +'Not Found!</h1></body></html>')
                    return;
                }
                res.statusCode =200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html')
            res.end('<html><body><h1> Error 404 '+fileUrl +'Not an HTML Fle!</h1></body></html>')
            return;

        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html')
        res.end('<html><body><h1> Error 404 '+ req.method + 'Not supported!</h1></body></html>')
        return;
    }
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
//fs file system is a core node module allowsto read write file from stsem
//path core module allows to specify local file path