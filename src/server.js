const express = require("express")
const nunjucks = require("nunjucks")
const server = express()

const db = require("./database/db")

//Configurar pasta publica
server.use(express.static("public"))

//Template engine


nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create_point", (req, res) => {
    
    req.query

    return res.render("create_point.html")
})

server.get("/search_results", (req, res) => {

    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Registros:")
        console.log(rows)
        const total = rows.length
        return res.render("search_results.html",{places: rows, total})
    })
    
})

//Usado para ligar o servidor
server.listen(3000)