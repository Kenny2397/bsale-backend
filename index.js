const express = require('express')
const cors = require('cors')

require('dotenv').config()
const app = express()

// CORS: Permitir accesar desde un origen distinto
app.use(
  cors({
    origin: 'http://localhost:3000',
    // Credenciales
    credentials: true
  })
)

// Habilitar lectura y guardado de archivos json en métodos POST y PUT
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT 

app.listen(port, () => {
  console.log(`Listening on Port ${port} ...`)
})