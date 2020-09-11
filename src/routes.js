const express = require('express')
const UserController = require('./controllers/UsersController')

const routes = express.Router()

routes.get('/', UserController.index)
routes.get('/:id', UserController.indexById)
routes.post('/', UserController.create)
routes.put('/:id', UserController.edit)
routes.delete('/:id', UserController.delete)

module.exports = routes