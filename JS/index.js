const fs = require('fs')
const path = require('path')

console.log(__dirname)
//..也可以做判斷喔
let textPath = path.join(__dirname, '../Test/Test.txt')
console.log(textPath)

fs.readFile(textPath, function (err, data) {
  //須注意的事情是讀取的資料為16進制
  //並且對應的data對象為Buffer
  //所以還需要使用toString()來轉換
  console.dir(data)
  console.log(data)
  console.log(data.toString())
})