const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req,res) => {
    let q = url.parse(req.url, true);
    let filename = `.${q.pathname}`;

    switch(filename) {
        case './':
        case './index.html':
            fs.readFile('./index.html', (err, data) => {
                res.writeHead(200, {"Content-type": "text/html"});
                res.write(data);
                return res.end();
            })
            break;
        case './about.html':
        case './contact-me.html':
            fs.readFile(filename, (err, data) => {
                res.writeHead(200, {"Content-type": "text/html"});
                res.write(data);
                return res.end();
            })
            break;
        case './404.html':
        default:
            fs.readFile('./404.html', (err, data) => {
                res.writeHead(404, {"Content-type": "text/html"});
                return res.end(data);
            })
            break;
    }
}).listen(8080)