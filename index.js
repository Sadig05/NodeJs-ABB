const http = require('http');
const { parse } = require('url');

let requestCount = 0;

const server = http.createServer((req, res) => {
  requestCount += 1;

  const { pathname } = parse(req.url);

  if (pathname === '/') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Request handled successfully', requestCount }));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = process.argv.includes('--port')
  ? process.argv[process.argv.indexOf('--port') + 1]
  : 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
