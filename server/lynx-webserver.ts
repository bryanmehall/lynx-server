import http from 'http'
import fs from 'fs'
import path from 'path'


const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || "development"

const server = http.createServer((req, res) => {
    // Server-sent events endpoint
    if (req.url === '/subscribe') {
        sendEvent(res)
    } else {
        console.log(req.url)
        returnStatic(req, res)
    }
})

const sendEvent = (res: http.ServerResponse) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });
    const refreshRate = 5000; // in milliseconds
    const id = Date.now();
    const data = `Hello World!!! ${id}`
    const message =
    `retry: ${refreshRate}\nid:${id}\ndata: ${data}\n\n`
    res.end(message)
}

const returnStatic = (req, res: http.ServerResponse) => {
    const fileName = req.url === '/' ? './index.html' : req.url
    const filePath = path.join(__dirname, fileName)
    fs.readFile(filePath, (err, data) => {
        if (err){
            console.log(`Error fetching ${fileName}`, err)
        } else {
            const options = path.extname(filePath) === '.svg' ? {'Content-Type': 'image/svg+xml'} : {
                //'Content-Type': mimeType,
                //'Content-Length': contents.length,
                //'Accept-Ranges': 'bytes',
                'Cache-Control': 'no-cache'
            }
            res.writeHead(200, options)
            res.end(data)
        }
    })
}



server.listen(PORT)
server.on('error', (err) => {
    console.log(err)
    process.exit(1)
  })
  
server.on('listening', () => {
    console.log(`${NODE_ENV} server listening on port ${PORT}`)
  })
