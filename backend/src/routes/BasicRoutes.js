import express from 'express'
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("this is the main page")
})

router.get("/wow",(req, res)=>{
    res.send("this is the wow page")
})

export default router