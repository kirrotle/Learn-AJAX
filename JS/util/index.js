const { sum } = require('./lib/arr.js')
const { checkUser, checkPwd } = require('./lib/checkAccount.js')

//index.js如果還需要讓其他人使用
//得再向外導出一次
module.exports = {
  sum,
  checkUser,
  checkPwd
}