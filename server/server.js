const express = require('express')
const dotEnv = require('dotenv')
dotEnv.config()
if (!process.env.SECRET_KEY) throw new Error('SECRET_KEY must be set')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocs = yaml.load('./swagger.yaml')
const db = require('./database/connection')

const app = express()
const PORT = process.env.PORT || 3001

// Connect to the database
db.query('SELECT 1')
  .then(() => console.log('Database successfully connected'))
  .catch(error => console.error(`Database Connectivity Error: ${error}`))

// Handle CORS issues
app.use(cors())

// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
