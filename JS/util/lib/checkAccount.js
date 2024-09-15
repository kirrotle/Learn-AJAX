const indexHtml = 'https://www.google.com/'

const checkUser = (user) => {
  return user.length >= 8
}

const checkPwd = (pwd) => {
  return pwd.length >= 8
}

module.exports = {
  indexHtml,
  checkUser,
  checkPwd
}