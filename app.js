const express=require('express')
const {connectToDB,getDb}=require('./db')
// init app & middleware
const app=express()

// db connection 

let db;

connectToDB((err)=>{
    if(!err){
app.listen(3000, () => {
  console.log(`lisening at port 3000`);
})

db=getDb()
    }
})


//routes
app.get('/book',(req,res)=>{
res.json({msg:'wlc to api'})
})