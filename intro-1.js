const name = "Viewers"

console.log(`namaste ${name}`)

// Also covered the Globals Part of the tutorials here itself

console.log(__dirname) // __dirname is a global variable which gives the path to current directory
console.log(__filename) // __filename is a global variable which gives the path to current file

setInterval(() => {
    console.log(`always welcomes you`)
}, 1000);