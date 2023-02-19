const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log('event1',name,id)
})


customEmitter.on('response',(name)=>{
    console.log('event2',name)
})

customEmitter.emit('response','Suhil','234')
