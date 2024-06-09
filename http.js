const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Oops</h1>
  <p>We can't seeem to find the page you're looking for</p>
  <a href='/'>home</a>
  `);
  // res.write("Welcome to our home page");
  // res.end();
});

server.listen(5000);
