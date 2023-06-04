const express=require('express')
const {connectToDB,getDb}=require('./db')
// init app & middleware
const app=express()

app.listen(3000,()=>{
console.log(`lisening at port 3000`)
})


//routes
app.get('/book',(req,res)=>{
res.json({msg:'wlc to api'})
})