const express = require("express");
const cors = require("cors");

const app = express();

const {connection} = require("./config/db");
const {ROUTER} = require("./routes/book.routes");

app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("everything is going fine");
});



app.use("/book", ROUTER);

app.listen(process.env.PORT, async()=>{
    try{
        await connection;
        console.log("Connected to MONGODB");
    }
    catch(err){
        console.log(err);
    }
    console.log(`server is awake at PORT ${process.env.PORT}`);
});