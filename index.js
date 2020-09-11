const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (_req, res, _next) => {
  res.status(200).send({
    title: 'API CASA 2',
    version: '0.0.1',
  });
});
app.listen(3333 || process.env.PORT)