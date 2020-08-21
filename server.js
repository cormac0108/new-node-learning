const http = require('http');

// const server = http.createServer(() => {
//     console.log( 'i hear you! ');
// })

// server.listen(3001);

//then go to local host 3000 in your web browser. port 3000.

const server = http.createServer((request, response) => {
    //console.log('headers' , request.headers)
    console.log('method', request.method)
    console.log('url', request.url)
    const user = {
        name: 'jame',
        hobbies: 'skateboarding'
    }

    // response.setHeader('Content-Type', 'Text/html');
    response.setHeader('Content-Type', 'application/json'); //for json
    response.end(JSON.stringify(user));
    // response.end('<h1> Helllooo >/h1>')

})

// you get json format. 

server.listen(3001);

// you just built your very first server. next we will use express .js as 
// a tool. 