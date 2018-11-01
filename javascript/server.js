var http = require('http');
var fs = require('fs');

function server(req, res) {
  fs.readFile('../html/index.html', function(err, data) {
    res.writeHead(200, {
      'content-Type': 'text/html'
    });
    res.write(data);
    res.end();
  });
}

http.createServer(server).listen(1337);