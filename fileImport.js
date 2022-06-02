let http = require("http");
let fs = require("fs");

let fileReader = (filepath, res) => {
  console.log("hello");
  fs.access(filepath, (err) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>File is not found</h1>");
    } else {
      fs.readFile(filepath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text" });
        console.log(data);
        res.end(data);
      });
    }
  });
};

const server = http.createServer((req, res) => {
  console.log(req);
  fileReader("./myNote.txt", res);
});

server.listen(3000, () => {
  console.log("3000");
});
