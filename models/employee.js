const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "id":String,
        "name":String,
        "salary":String
    }
)
let employeesmodel=mongoose.model("employees",schema);
module.exports={employeesmodel}