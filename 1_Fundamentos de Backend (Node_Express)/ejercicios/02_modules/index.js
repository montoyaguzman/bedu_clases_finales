const http = require('http')
const dt = require('./myModule')

http.createServer((req, res) => {
  res.writeHeader(200, {'Content-Type': 'text/html'})
  return res.end(`Today is ${dt.myDateTime()}`)
}).listen(8080)
