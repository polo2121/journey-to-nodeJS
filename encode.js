let http = require("http");
let url = require("url");
require("dotenv").config();

let routes = {
  GET: {
    "/": (req, res) => {
      console.log(`Method is GET and url is /`);
    },
  },
  POST: {
    "/home": (res, req) => {
      console.log(req);
      let body = "";
      //data လက်ခဲရရှိပြီရှိဆိုရင် အောက်ကကောင်ကအလုပ်စလုပ်မယ်
      req.on("data", (data) => {
        console.log("in Home");
        body += data;
        console.log("here");
      });

      //data အားလုံးလက်ခံရရှိလို့ပြီးသွားရင်
      req.end("end", () => {
        console.log("end");
        res.end;
      });
    },
  },
};

let server = http.createServer((req, res) => {
  let reqMethod = req.method;
  let urls = url.parse(req.url, true);
  let route = routes[reqMethod][urls.pathname];
  //   console.log(req);
  route(req, res);
});

server.listen(process.env.PORT, () => {
  console.log(`server is running in port ${process.env.PORT}`);
});

// let start = (req, res) => {
//   let reqMethod = req.Method();
//   let url = url.prase(req.url, true);

//   console.log(req.url);
//   console.log(url);

//   let routes = routes[reqMethod][url];
//   console.log(routes);
// };

// start();

/* Rectangle 48 */

position: absolute;
width: 290px;
height: 200px;
left: 29px;
top: 162px;

background: #D78DFC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

