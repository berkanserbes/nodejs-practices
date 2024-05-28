var http = require('http');

var server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end('Home page');
    }
    if(req.url == '/About') {
        // blocking code
        for (let i= 0; i < 1000; i++) {
           for (let j = 0; j < 1000; j++) {
            console.log(`${i} ${j}`)
           }
        }
        res.end('About page');
    }
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000')
})
