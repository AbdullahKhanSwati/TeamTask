import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
   name: {type : String},
   price:{type : Number},
   rating:{type : Number},
   review:{type : String},
   distance:{type  : String}
})
export default mongoose.model("AllData", ItemSchema)