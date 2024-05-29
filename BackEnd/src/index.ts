import express from "express"

import "dotenv/config"
const app = express()

const port = process.env.PORT || 8080

app.use(express.json())

app.get("/ping",(req,res)=>{
    res.json({message:"pong"}).status(200)
})

app.listen(port,()=>{
    console.log(`server running on port:${port}`);
    
})