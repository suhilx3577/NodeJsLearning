const lo = require('lodash')

const items = [1,[2,[3,[4]]]]

const newitems =  lo.flattenDeep(items)

console.log(newitems)

console.log('Hello people')