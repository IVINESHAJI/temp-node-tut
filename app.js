const http = require('http');

/* Two parameters req and res(both are objects).
req - Incoming requests
res - Reponse sending back
*/

const server = http.createServer((req, res) => {
    
    if(req.url === '/') {
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page looking for</p>
        <a href="/">Back Home</a>
        `);
    }
    
});

server.listen(5000);