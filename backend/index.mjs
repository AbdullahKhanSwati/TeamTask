import express from "express";
import mongoose from "mongoose";
// import data from "./data.mjs"
import Item from "./Item.mjs"
import AllData from "./AllData.mjs"

const conn = `mongodb+srv://Abdullah_Khan:mazullah213@cluster0.gqgfyf4.mongodb.net/TeamTask`

const app = express();
const port = process.env.PORT || 4500;

mongoose.set('strictQuery', true);
app.use(express.json());


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
next();
})


mongoose.connect(conn).then(() =>{
    console.log("connected successfully")
}).catch((error) =>{
    console.log(error);
})


app.get("/",async(req,res)=>{
    res.status(200).send("hello world");
})



app.post("/Dishes",async(req,res)=>{

    console.log(req.body);
    const newItem= new Item(req.body);
    
    try {
        const savedProduct= await newItem.save();
        res.status(201).json(savedProduct);
    }catch(err) {
        res.status(500).json("could not save");
    }
})


app.post("/AllData",async(req,res)=>{

    console.log(req.body);
    const newItems= new AllData(req.body);
    
    try {
        const savedProduct= await newItems.save();
        res.status(201).json(savedProduct);
    }catch(err) {
        res.status(500).json("could not save");
    }
})

app.get("/Dishes",async(req,res)=>{
    try {
        const items = await Item.find({});
        res.status(200).send(items);
    }catch(err) {
        res.status(500).send("could not fetch")
    }
    
})

app.get("/AllData",async(req,res)=>{
    try {
        const items = await AllData.find({});
        res.status(200).send(items);
    }catch(err) {
        res.status(500).send("could not fetch")
    }
    
})



app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})