const fs = require('fs');
const http = require('http');

http.createServer((request, response) =>{
  const file = request.url;
  fs.readFile(file, (error, data)=>{
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hola Mundo!");
    response.end();
  });

}).listen(8888);
