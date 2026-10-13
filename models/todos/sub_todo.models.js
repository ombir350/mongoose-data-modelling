import mongoose from "mongoose"

const subTodoSchema=new mongoose.Schema({
  contant :{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type : mongoose.Schema.types.ObjectId,
    ref:"User"
  },
},{timestamps:true})

export const subTodo=mongoose.model("subTodo",subTodoSchema);