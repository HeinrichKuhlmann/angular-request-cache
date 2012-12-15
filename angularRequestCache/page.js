
var http = require("http");
console.log(http);

var mongo = require("mongodb");
var Server = mongo.Server;
var Db = mongo.Db;

var server = new Server("localhost",27017, {auto_reconnect: true});
var db = new Db('test',server,{safe:false});

var ser = http.createServer(function(request, response) {
  console.log(request);
  console.log(response);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
  request.connection.destroy();
}).listen(8888);

console.log(ser);