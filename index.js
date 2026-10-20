import express from 'express'
import pg, { Pool } from 'pg'
const app = express()
const port = 3000
 

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password:'ijulganteng',
    port: 5432,
})

app.get('/', (req, res)) => {
    console.log("Test aja: ");

    pool.query ('SELECT * FROM BIODATA ORDER BY ID')
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.error(err);
    })
}

