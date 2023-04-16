import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
   name: {type : String},
   offer:{type : String},
   price:{type : Number},
   rating:{type : Number},
})
export default mongoose.model("Item", ItemSchema)