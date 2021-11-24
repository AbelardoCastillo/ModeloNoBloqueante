var fs = require('fs') //modulo file system
console.log('\nAbriendo Archivo...')

var content = fs.readFile('archivo.txt','utf8', function(error,content){
console.log(content)
})

console.log('\nHaciendo otra cosa')
console.log(process.uptime())