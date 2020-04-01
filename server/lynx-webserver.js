#!/usr/bin/env node
const http = require('http')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'index.html')
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || "development"

const server = http.createServer((req, res) => {
    // Server-sent events endpoint
    if (req.url === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        });
        const refreshRate = 5000; // in milliseconds
        const id = Date.now();
        const data = `Hello World ${id}`;
        const message =
        `retry: ${refreshRate}\nid:${id}\ndata: ${data}\n\n`;
        res.end(message)
        return;
    } else {
        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data)
        })
    }
})



server.listen(PORT)
server.on('error', (err) => {
    console.log(err)
    process.exit(1)
  })
  
server.on('listening', () => {
    console.log(`${NODE_ENV} server listening on port ${PORT}`)
  })
