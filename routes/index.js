import express from 'express'
import paymentRoutes from './routes.js'
import {Puerto} from './config.js'
import morgan from 'morgan'
const app = express()

app.use(morgan('dev'))
app.use(paymentRoutes)
app.listen(Puerto)
console.log("escuchando en el ")