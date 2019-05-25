const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const privateKey = fs.readFileSync('/etc/letsencrypt/live/kylechan.me/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/kylechan.me/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/kylechan.me/chain.pem', 'utf8');


const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

const redirectInsecure = (req, res, next) => {
    if(!req.secure) {
        var secureUrl = "https://" + req.headers['host'] + req.url;
	res.writeHead(301, { "Location":  secureUrl });
        res.end();
    }
    next();
}

app.use(redirectInsecure);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
   console.log('HTTPS Server running on port 443');
});
