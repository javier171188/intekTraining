const http = require('http');
const fs = require('fs');
const pug = require('pug');

function doOnRequest(request, response){
  // Send back a message saying "Welcome to Twitter"
  // code here...
  //response.write("Welcome to Twitter")  
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    let html = fs.readFileSync('index.html');
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end()
    //fs.createReadStream()

  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    // code here...
    response.write('hi back to you!');  
    response.end();  
    fs.appendFileSync('hi_log.txt',  'Somebody said hi.\n')
    
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
      if (body === 'hello'){
        response.end('hello there!');
      } else if (body === "what's up"){
        response.end("the sky");
      }
      else{
        response.end("good morning")
      }
      fs.appendFileSync('hi_log.txt',  body + '\n');
  });
    
  }
  else if (request.method === 'GET' && request.url === '/style.css'){
    let css = fs.readFileSync('style.css');
    response.writeHead(200, {"Content-Type": "text/css"});
    response.write(css);
    response.end();
  }
  else if (request.method === 'PUT' && request.url === '/change'){
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    
    request.on('end', () => {
      fs.writeFileSync('hi_log.txt', body + '\n')
      response.end();
    })

  } else if (request.method === 'DELETE' && request.url === '/delete') {
      fs.unlinkSync('hi_log.txt');
      response.end();
  }
  else {
    // Handle 404 error: page not found
    response.setStatusCode = 404;
    response.end('Error: Not Found')
    
    
  }
}

const server = http.createServer(doOnRequest)

server.listen(3000);
