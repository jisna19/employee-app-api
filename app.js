const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const employees=require("./models/employee")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/contact",(req,res)=>{
    res.send("welcome")
})

app.listen(8080,()=>{
    console.log("Server started")
})