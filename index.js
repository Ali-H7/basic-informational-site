const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const options = {
  root: path.join(__dirname),
};

app.get("/", (req, res) => {
  res.sendFile("./index.html", options);
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", options);
});

app.get("/contact-us", (req, res) => {
  res.sendFile("./contact-us.html", options);
});

app.get("/styles.css", (req, res) => {
  res.sendFile("./styles.css", options);
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", options);
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// old code without express
// import { createServer } from "node:http";
// import fs from "node:fs";

// const server = createServer((req, res) => {
//   let visitedPath = "";
//   let type = "text/html";
//   switch (req.url) {
//     case "/":
//       visitedPath = "./index.html";
//       break;
//     case "/contact-us":
//     case "/about":
//       visitedPath = `.${req.url}.html`;
//       break;
//     case "/styles.css":
//       visitedPath = "./styles.css";
//       type = "text/css";
//       break;
//     default:
//       visitedPath = "./404.html";
//   }

//   res.setHeader("Content-Type", type);
//   fs.readFile(visitedPath, "utf8", (err, data) => {
//     if (err) console.error(err);
//     res.write(data);
//     res.end();
//   });
// });

// server.listen(8080);
