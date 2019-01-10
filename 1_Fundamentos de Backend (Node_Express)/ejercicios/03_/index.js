const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

http.createServer((req, res) => {
  if(req.method === 'POST') {
    let form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log(err)
      } else {
        // guardar el archivo
        fs.writeFile("/files", "Hey there!", function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
         }); 
        //
        console.log(files)
        return res.end('Archivo subido con exito!')
      }
    })
  } else {
    fs.readFile('./form.html', (err, data) => {
      res.writeHead(200, { 'Content-Type' : 'text/html' })
      res.write(data)
      return res.end()
    })
  }
  
}).listen(8000)
