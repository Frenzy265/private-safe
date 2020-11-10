const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})


wifi=123
console.log(wifi)
key=123
console.log(key)
bank=123
console.log(bank)
