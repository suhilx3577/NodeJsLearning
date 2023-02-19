const {readFile} = require('fs')

const getText =(path) => {
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
                return
            }
            else{
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt') // change the path here accordingly
    .then(result => console.log(result))
    .catch(error=> console.log(error))