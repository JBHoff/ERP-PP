require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDB = require('./backend/database/mongo')

const clienteRoutes = require('./backend/routes/clientes')
const productoRoutes = require('./backend/routes/productos')
const ventaRoutes = require('./backend/routes/ventas')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/clientes', clienteRoutes)
app.use('/api/productos', productoRoutes)
app.use('/api/ventas', ventaRoutes)

app.use(express.static('frontend/public'))

app.listen(process.env.PORT, () => {
  console.log(`Servidor en puerto ${process.env.PORT}`)
})