import express from "express"
import cookieParser from "cookie-parser"
import "dotenv/config"
const app = express()
import  userRoute from './routes/user'
import authRoute from "./routes/auth"
import addProductRoute from "./routes/products"
import cors from "cors"
const port = process.env.PORT || 8080

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );
app.use("/api/user",userRoute)

app.use("/api/auth", authRoute);
app.use('/api/products', addProductRoute);
app.listen(port,()=>{
    console.log(`server running on localhost ${port}`);
    
})