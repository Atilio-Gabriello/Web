const express = require("express")
const server = express()

server.get("/", (req,res) => {
    res.send("H")
})

server.listen(3000)