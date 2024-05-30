import express from "express"
import cookieParser from "cookie-parser"
import "dotenv/config"
const app = express()
import  userRoute from './routes/user'
const port = process.env.PORT || 8080

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user",userRoute)


app.listen(port,()=>{
    console.log(`server running on localhost ${port}`);
    
})