const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Welcome to home page')
        res.end();
    } else if(req.url === '/about') {
        res.write('Welcome to about page')
        res.end();
    }

    res.end(`
        <h1>Ooops!</h1>
        <p>We can't seem to find the page you are looking for</p>    
        <a href='/'>Go to home page</a>
    `)
});

server.listen(5000); // localhost:5000