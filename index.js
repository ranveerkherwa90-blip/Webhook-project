const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObj = url.parse(req.url, true).query;

    if (req.method === 'GET' && queryObj['hub.verify_token'] === 'my_webhook_token') {
        res.end(queryObj['hub.challenge']);
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
             console.log('Received data:', body);
  const data = JSON.parse(body);           res.end('EVENT_RECEIVED');
        });
    } else {
        res.end('Webhook received');
    }
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});
