const http = require('http');

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'DEV';

const server = http.createServer((req, res) => {
  res.end(`Hello World from ${ENV}`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});