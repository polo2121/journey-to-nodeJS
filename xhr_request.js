// let http = require("http");

// let url = "https://jsonplaceholder.typicode.com/posts";
// let xhr = new XMLHttpRequest();
// let data = "";

// xhr.open("GET", url);

// xhr.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let responseTexts = JSON.parse(this.responseText);
//     // console.log(responseTexts)
//     responseTexts.forEach((textChunk) => {
//       data += `<h1>${textChunk.title}</h1>`;
//       //    console.log(data)
//     });
//     document.getElementById("here").innerHTML = data;
//   }
// };

// return ပြန်လာတယ့် data တွေကို website ပေါ်ပြန်တင်မယ်
// callback function
// function putData(responseTexts) {
//   responseTexts.forEach((textChunk) => {
//     data += `<h1>${textChunk.title}</h1>`;
//     //    console.log(data)
//   });
//   document.getElementById("here").innerHTML = data;
// }
// xhr.onload = function () {
//   if (this.status == 200) {
//     let responseTexts = JSON.parse(this.responseText);
//     putData(responseTexts);
//   }
// };

//with onload function
// xhr.onload = function () {
//   if (this.status == 200) {
//     let responseTexts = JSON.parse(this.responseText);
//     // console.log(responseTexts)
//     responseTexts.forEach((textChunk) => {
//       data += `<h1>${textChunk.title}</h1>`;
//       //    console.log(data)
//     });
//     document.getElementById("here").innerHTML = data;
//   }
// };

//တောင်းလိုက်တယ့် data က နည်းငယ်ကြာမယ်ဆိုရင် နောက်က function က အလုပ်လုပ်မယ်

// let url = "https://jsonplaceholder.typicode.com/posts";
// let xhr = new XMLHttpRequest();
// let data = "";

// function loadData() {
//   xhr.open("GET", url);
//   xhr.send();
//   return new Promise((rel, rej) => {
//     xhr.onload = function () {
//       if (this.status == 200) {
//         rel(this.responseText);
//       } else {
//         rej();
//       }
//     };
//   });
// }

// loadData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("you fail");
//   });
// myPromise.then(console.log("hello")).catch(err);

// const myPromise = new Promise((rel, rej) => {
//   xhr.open("GET", url);
//   xhr.send();
//   xhr.onload = function () {
//     if (this.status == 200) {
//       rel(this.responseText);
//     } else {
//       rej("Fail");
//     }
//   };
// });

// myPromise
//   .then((responseddata) => {
//     console.log(responseddata);
//     var responseddata = JSON.parse(responseddata);
//     responseddata.forEach((dataChunk) => {
//       data += `<h1>${dataChunk.id}</h1><h2>${dataChunk.title}</h2>`;
//     });
//     document.getElementById("here").innerHTML = data;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let nextUser = () => {
  let index = 0;

  return {
    next: () => {
      return index < userInfo.length
        ? { value: userInfo[index++], done: false }
        : { done: true };
    },
  };
};

let userInfo = [
  { img: "./p1.png", name: "Marc", age: 30, mt: "sliver" },
  { img: "./p2.png", name: "Steven", age: 35, mt: "gold" },
  { img: "./p3.png", name: "Jake", age: 40, mt: "gold" },
];

let aUser = nextUser();

let nextBtn = () => {
  let result = aUser.next();
  document.getElementById("name").value = result.value.name;
  document.getElementById("age").value = result.value.age;
  document.getElementById("type").value = result.value.mt;
  document.getElementsByTagName("img")[0].src = result.value.img;
};

// console.log(aUser.next());
// console.log(aUser.next());
// console.log((document.getElementsByTagName("img")[0].src = "./p1.png"));
