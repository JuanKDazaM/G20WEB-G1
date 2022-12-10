import express from  "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app = express();

const port = process.env.PORT ||8080;

app.listen(port, ()=>{
    console.log("El servidor se esta ejecutando correctamente");
})
mongoose.connect("mongodb+srv://MesaServicio:<Auto>@mesaserviciocluster.d9xymzv.mongodb.net/mesaServicio?retryWrites=true&w=majority", (err)=>{
    if(err){
        console.log(err);
    }else {
        console.log("La conexión con base de datos ha sido exitosa");
    }
    
})
//Middleware

app.use(express.json())
app.use("/user", userRouter)