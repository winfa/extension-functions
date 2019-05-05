var page = require("./page-1");
var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write(JSON.stringify(page)); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
