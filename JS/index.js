let fs = require('fs')
fs.readFile('..\\Test\\Test.txt', function (err, data) {
  //須注意的事情是讀取的資料為16進制
  //並且對應的data對象為Buffer
  //所以還需要使用toString()來轉換
  console.dir(data)
  console.log(data)
  console.log(data.toString())
})

fs.writeFile('..\\Test\\Test.txt', 'Hello World TAT', function (err) {
  //成功或是失敗都會進來,差別是成功的話err會有值
  if (err) console.log('寫入失敗')
  else console.log('寫入成功')
})
