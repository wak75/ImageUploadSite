import express from 'express'
import dotenv from 'dotenv'
import router from './routes/BasicRoutes.js'
import {connectDB} from "./config/DBConnection.js"


dotenv.config()
const app  =  express()
const port = process.env.PORT || 4000
app.use(express.json())

connectDB()
app.use('/', router)




app.listen(port,()=>{
    console.log(`The service is running on port ${port}`)
})

