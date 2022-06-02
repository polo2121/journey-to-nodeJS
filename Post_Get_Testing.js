const http = require("http");

let routes = {
  GET: {
    "/": (req, res) => {
      console.log("Method is GET &  Path is /");
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Hello World!</h1>");
      return res.end();
    },
    "/about": () => {
      console.log("Method is GET & Path is /about");
    },
  },

  POST: {
    "/": () => {
      console.log("Method is POST &  Path is /");
    },
    "/about": () => {
      console.log("Method is POST & Path is /about");
    },
  },
};
const server = http.createServer((req, res) => {
  routes[req.method][req.url](req, res);

  // if(req. url === "/"){

  // 	res.setHeader("Content-Type","text/html")
  // 	res.write("<h1>Hello World!</h1>")
  //     return res.end();

  // }
});

server.listen(3000, () => {
  console.log("The server is running on the port 3000 locahost....");
});
