const {readFile} =  require('fs')

console.log('first task completed')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed second task')
})

console.log('third task completed')