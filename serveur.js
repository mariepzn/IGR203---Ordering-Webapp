const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0'; //different sur le reseau telecom
const port = 3000;

http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'home.html' : req.url);
  const extname = String(path.extname(filePath)).toLowerCase();
  let contentType = 'text/html';
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
  };

  contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if(err.code == 'ENOENT') {
        fs.readFile(path.join(__dirname, '404.html'), (error, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        res.writeHead(500);
        res.end(`Erreur du serveur : ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}).listen(port, hostname, () => {
  console.log(`Serveur en cours d'exécution à l'adresse http://${hostname}:${port}/`);
});


// connecter sur http://id:3000/ en etant sur le meme wifi, remplacer id par l'ip donnée par ifconfig