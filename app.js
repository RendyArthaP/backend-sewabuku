const express = require('express');
const app = express()
const { PORT } = require('./config')
const cors = require('cors')
const routes = require('./routes')

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`)
})