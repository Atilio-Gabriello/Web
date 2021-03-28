const express = require("express")
const server = express()

//Configurar pasta publica
server.use(express.static("public"))

//Template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

server.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create_point", (req,res) => {
    res.sendFile(__dirname + "/views/create_point.html")
})

server.get("/search_results", (req,res) => {
    res.sendFile(__dirname + "/views/search_results.html")
})

//Usado para ligar o servidor
server.listen(3000)