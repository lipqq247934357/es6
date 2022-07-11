const http = require('http');

http.createServer(function (requset, response) {
    console.log('request come', requset.url)
    response.end('123')
}).listen(3000)

http.createServer(function (requset, response) {
    console.log('request come', requset.url)
    response.end('456')
}).listen(4000)


http.createServer(function (requset, response) {
    console.log('request come', requset.url)
    response.end('789')
}).listen(6000)

console.log('服务启动了~');