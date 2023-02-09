const express= require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{

    res.send('hello mimisaaa')
})


app.listen(port,()=>
console.log(`my server listening on port : ${port}`)
)