if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

const express = require("express")
const app = express()
const router = require("./routers")
const cors = require("cors")
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/", router)

app.get("/", (req,res)=>{res.send('halo')})

app.listen(port, ()=>{ console.log('on port 3000');})

module.exports = app