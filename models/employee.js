const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "id":{type:String,required:true},
        "name":{type:String,required:true},
        "salary":{type:String,required:true},
        "designation":{type:String,required:true}
    }
)
let employeesmodel=mongoose.model("employees",schema);
module.exports={employeesmodel}