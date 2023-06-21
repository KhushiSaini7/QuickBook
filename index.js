import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"


const app = express()
dotenv.config()

mongoose.set('strictQuery',true);

const uri=process.env.MONGO;
mongoose.connect(uri);


/*const connect= async() => {
  try {
   // await mongoose.connect('mongodb://127.0.0.1:27017/test');
   await 
    console.log("Connected to mongoDB.")
  } catch (error) {
    throw error;
  }

};*/

mongoose.connection.once("disconnected", () => {
   console.log("mongodb disconnected! "); 
})

mongoose.connection.on("connected", () => {
    console.log("mongodb connected! ") ;
 }) 

 

app.listen(8000, ()=> {
    
 console.log("Connected to backend.");
});


app.get("/",(req,res)=>{
  res.send("Hello first request!")
 }
 );