var http = require('http');

function renderNewPostForm(request, response) {
        response.writeHead(200, {
                'Content-type': 'text/plain'
        });
        response.end('Hello World Testing in Mini');
}

var server = http.createServer(function(request, response) {
        renderNewPostForm(request,response);
});

server.listen(8080);

console.log('Listening on http://127.0.0.1:8080');