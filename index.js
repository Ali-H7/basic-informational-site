import { createServer } from "node:http";
import fs from "node:fs";

const server = createServer((req, res) => {
  let visitedPath = "";
  let type = "text/html";
  switch (req.url) {
    case "/":
      visitedPath = "./index.html";
      break;
    case "/contact-us":
    case "/about":
      visitedPath = `.${req.url}.html`;
      break;
    case "/styles.css":
      visitedPath = "./styles.css";
      type = "text/css";
      break;
    default:
      visitedPath = "./404.html";
  }

  res.setHeader("Content-Type", type);
  fs.readFile(visitedPath, "utf8", (err, data) => {
    if (err) console.error(err);
    res.write(data);
    res.end();
  });
});

server.listen(8080);
