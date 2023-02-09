// OS Module

const os = require('os')
const info = os.userInfo()
console.log(info)

console.log(`system uptime is :${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOS)