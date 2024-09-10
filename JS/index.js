const path = require('path')
const fs = require('fs')

let htmlPath = path.join(__dirname, '../index.html')

let p = new Promise(function (resolve, reject) {
  fs.readFile(htmlPath, function (err, data) {
    let text = data.toString();
    text = text.replaceAll(/\r\n/g, '')
    resolve(text)
  })
})

p.then(function (result) {
  fs.writeFile('./test.html', result, function (err) {
    if (err)
      console.log('寫入失敗')
    else
      console.log('寫入成功')
  })
})






