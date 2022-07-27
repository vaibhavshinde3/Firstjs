const http=require("http");

// it will create server and handle every request comes to the server

var server=http.createServer(function(req,resp){
     console.log("received request :"+req.url+"------>"+req.method);
     resp.writeHeader(200,{'content-type':'text/html','content-length':100})    //application/json   image/jpg  
     resp.write("<h1>Hello world!!</h1>");
     resp.end("<h2>Response ended</h2>");

});
//to start the server
server.listen(3000);
console.log("server running at port 3000");
