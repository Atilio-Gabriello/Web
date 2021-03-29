const express = require("express")
const nunjucks = require("nunjucks")
const server = express()
server.use(express.urlencoded({ extended: true}))

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
    return res.render("create_point.html")
})

server.post("/savepoint", (req, res) =>{
    
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create_point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)
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