var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    if(req.url === '/'){
        fs.creatReadStream(_dirname + '/index.html').pipe(res);
    }

    else if(req.url === '/about'){
        fs.creatReadStream(_dirname + '/yang.html').pipe(res);

    }

    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        var error = fs.readFileSync(_dirname + '/404page.html','utf8');
        res.end(error);
    }
    

}).listen(3000,'127.0.0.1');
