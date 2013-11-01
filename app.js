require('http').createServer(function handleRequest(request,response) {
   response.writeHead (200, {'content-type': 'text/plain'});
   response.end ('i love world');
})
.listen(8080);