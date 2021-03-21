const express = require("express")
const server = express()

server.get("/", (req,res) => {
    res.send("Hello word")
})

server.listen(3000)