import mongoose from "mongoose"

const TodoSchema=new mongoose.Schema({
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
  subTodos:[
    {
      type:mongoose.Schema.types.ObjectId,
      ref:"subTodo"
    },
  ],
},{timestamps:true})

export const Todo=mongoose.model("Todo",TodoSchema);