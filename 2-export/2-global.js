const names = require('./2-names')
const greetFunc = require('./2-func')
// const data = require('./2-alternative')

// console.log(data)
// console.log(data.singlePerson.bob)

// greetFunc.greet(names.manish)
// greetFunc.greet(names.suhil)

// Mind Grenade was to show that the call in exported module gets invoked automatically even if not called
const data = require('./2-mind-grenade')

console.log(data)