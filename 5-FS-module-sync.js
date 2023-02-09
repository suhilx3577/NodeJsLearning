const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/subcontent/first.txt','utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first,second)

/*  this line of code OVERWRITES everything in the text file
    if there is no textfile with that name, then it creates one textfile with the name and writes it    */
// writeFileSync('./Tuts/content/subcontent/answer.txt',`here is the result ${first}  and ${second}`)


//this line of codes APPENDS the data to the existing data present in the textfile
writeFileSync('./content/subcontent/answer.txt',`here is the result ${first}  and ${second}`,{flag:'a'})
