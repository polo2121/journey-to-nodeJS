/*

* Purpose of this file is after filling info on the responsed html page(which is input)
  redirect to this input page then store user info into a file 

*/

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/message" && req.method === "GET") {
    // fs.writeFileSync('filename','data')

    //redirect status code is 302
    fs.writeFileSync("message.txt", "dummy");
    res.statusCode = 302;

    res.setHeader("Location", "/");

    console.log("I am here");
    
    return res.end("<h1>Hello</h1>");
    //redriect syntax
  }
});

server.listen(3000, () => {
  console.log("The server is running on the port 3000 locahost....");
});
