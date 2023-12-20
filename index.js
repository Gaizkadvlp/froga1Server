const morgan = require("morgan")

const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(express.json())

app.get('/api', (req, res) => {
   console.log("Solicitud recibida")
   res.status(200).json({ message: 'Kaixo munduari!'})
})

app.listen(PORT, () => {
   console.log(`Server listening on port: ${PORT}...`)
})