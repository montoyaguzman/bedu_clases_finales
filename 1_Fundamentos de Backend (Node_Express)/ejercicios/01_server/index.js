const http = require('http')

http.createServer((req, res) => {
  console.log(req)
  console.log(req.body)
  console.log(req.method)
  return res.end('Hola mundo...')
}).listen(8080)

