const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {employeesmodel}=require("./models/employee")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://jisna19:jisna9947@cluster0.fzxusrj.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let employee=new employeesmodel(input)
    employee.save()
    console.log(employee)
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    employeesmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("Server started")
})