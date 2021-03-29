const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
/*
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

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
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY3ljbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "Papersider",
        "Guilherm Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletônico, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Registros:")
        console.log(rows)
    })

    //FUNÇÃO PARA DELETAR REGISTROS
    db.run(`DELETE FROM places WHERE id = ?`, [], function(err){
        if(err){
            return console.log(err)
        }

        console.log("Registro deletado")
    })
})*/