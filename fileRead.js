// This file shows how to read req from url
/*
    1.Get the path from url (https://www.polosteven@.com/about.html <--- path is followed by .com/)
    2.Get the directory of this file on the machine
    3. Concat them ==> the directory of this file + path to get file e.g Document\NodJS + fileRead.js
    4. Import built-in modules  - Path 
    5. Use it to get extension
    6. Read the requested
    7. Send back to user
*/

let http = require("http");
let url = require("url");
let fs = require("fs");
let path = require("path");

let extensions = {
  ".html": "text/html",
  ".png": "text/png",
  ".jpg": "text/jpg",
  ".css": "text/css",
};

function route(req, res) {
  let params = url.parse(req.url, true);
  let pathname = params.pathname == "/" ? "/index.html" : params.pathname;
  let requestedFilePath = __dirname + pathname;
  console.log(requestedFilePath);
  let getExtension = path.extname(pathname);
  console.log(getExtension);
  fs.readFile(requestedFilePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.write("<h1>File not found</h1>");
      res.end();
    } else {
      res.writeHead(404, { "Content-type": extensions[getExtension] });
      res.write(data);
      res.end();
    }
  });
}

let server = http.createServer((req, res) => {
  route(req, res);
});

server.listen(3000, () => {
  console.log("Listening 3000");
});
