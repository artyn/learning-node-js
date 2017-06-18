var http = require("http");
var server = http.createServer(function(request, response) {  
  response.writeHead(200, {"Content-Type": "text/html"});  
  response.write("<!DOCTYPE 'html'>");  
  response.write("<html><head><title>My first Node.js webapp</title></head><body>Hello World!</body></html>");  
  respond.end();});
server.listen(80);
console.log("Server is listening");
