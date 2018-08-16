
const  express=require('express')
const path=require('path')

const  server=express()

server.use('/',express.static(path.join(__dirname,'static')))


server.listen(4444, () => {
    console.log('Server started on http://localhost:4444')
})
