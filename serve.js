#!/usr/bin/env node
'use strict';

// Tiny local preview server for dist/. Usage: node serve.js [port]

const http = require('http');
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');
const PORT = +process.argv[2] || 8080;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.xml': 'application/xml', '.txt': 'text/plain'
};

http.createServer((req, res) => {
  let file = path.join(DIST, decodeURIComponent(req.url.split('?')[0]));
  if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    if (!req.url.split('?')[0].endsWith('/')) { res.writeHead(301, { Location: req.url + '/' }); return res.end(); }
    file = path.join(file, 'index.html');
  }
  fs.readFile(file, (err, body) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(body);
  });
}).listen(PORT, () => console.log(`Preview at http://localhost:${PORT}`));
