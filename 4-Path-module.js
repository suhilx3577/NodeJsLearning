const path = require('path')

const seperator = path.sep
console.log(seperator)

const name = path.join('content','subcontent','abc.txt')
console.log(name)

const base = path.basename(name)
console.log(base)

const  absolutePathname=path.resolve(__dirname,name);
console.log(absolutePathname)