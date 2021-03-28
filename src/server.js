const express = require("express")
const nunjucks = require("nunjucks")
const server = express()

//Configurar pasta publica
server.use(express.static("public"))

//Template engine


nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req,res) => {
    return res.render("index.html")
})

server.get("/create_point", (req,res) => {
    return res.render("create_point.html")
})

server.get("/search_results", (req,res) => {
    return res.render("search_results.html")
})

//Usado para ligar o servidor
server.listen(3000)