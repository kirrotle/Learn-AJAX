const http = require('http')
const fs = require('fs')

let server = http.createServer()

server.on('request', function (request, response) {
  console.log(request)
  response.setHeader('content-type', 'text/html')
  fs.readFile('../index.html', function (err, data) {
    response.end(data.toString())
  })
})

server.listen(3000, function (err) {
  if (err)
    console.log(err)
  else
    console.log('網站啟動成功')
})