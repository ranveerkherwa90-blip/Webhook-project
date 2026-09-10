const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Webhook received!');
  res.end('Webhook received!');
});

server.listen(process.env.PORT || 3000);
