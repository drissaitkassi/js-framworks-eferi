const express= require('express')
const { request } = require('http')
const app=express()
const port=3000


var customers=[
    {
        name:"tom",
        order:100
    },
    {
        name:"cruise",
        order:90
    },
]

app.use(express.static('public'))

// this is actualy a middleware(take action between the request and response )
app.use(express.json()) //convert request body from json to js object

//default route 

app.get('/',(req,res)=>{
    console.log(req.query)
    res.send('hello mimisaaa')
})

//get all customers
app.get('/customers',(req,res)=>
{
    res.json(customers)
})

//get one customer with query string (which is part of http protocol)

app.get('/customer',(req,res)=>{

    console.log(req.query)
    res.send("get with query ")

})

//get one customer with parms (which is managed by express)

app.get('/customers/:id',(request,res)=>{
    console.log(request.query)
    console.log(request.params)
    if(request.params.id>customers.length-1)console.log("out of range ")
    res.json(customers[request.params.id])
    // res.send("request with params")
    

})

app.post('/customer',(req,res)=>{
    //we are able to push req.body thanks to app.use(express.json()) 
    //because we first need to convert json to js object
    customers.push(req.body)
    res.send("this is a post request")

})

app.listen(port,()=>
console.log(`my server listening on port : ${port}`)
)