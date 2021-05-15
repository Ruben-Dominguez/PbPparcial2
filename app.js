const fs = require('fs');
const http = require('http');

// server creado en el puerto 8888
http.createServer((request, response) =>{
  // interpolacion de la ruta dada. default -> index.html
  const file = request.url == "/" ? "./index.html" : `./${request.url}`;
  fs.readFile(file, (error, data)=>{
    if(error) {
      response.writeHead(404, {"Content-Type":"text/plain"});
      response.write("Not found :(");
      response.end();
    }
    else {
      response.writeHead(200, {"Content-Type":"text/html"});
      response.write(data);
      response.end();
    }
  });

}).listen(8888);
