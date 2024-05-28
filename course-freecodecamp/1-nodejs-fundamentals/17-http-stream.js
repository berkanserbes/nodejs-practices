const http = require("http");
const fs = require("fs");

/*
http
  .createServer((req, res) => {
    const text = fs.readFileSync("./content/subfolder/bigtext.txt", "utf8");
    res.end(text);
  })
  .listen(5000);
*/

http
  .createServer((req, res) => {
    const file = fs.createReadStream("./content/subfolder/bigtext.txt", "utf8");
    file.on("open", () => {
      file.pipe(res);
    });
    file.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
