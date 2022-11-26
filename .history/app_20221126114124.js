const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  // res.write('Welcome to our home page');
  // res.end();
});

server.listen(5000);
