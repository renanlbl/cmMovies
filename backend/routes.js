const express = require("express");
const UsersController = require('./controllers/UsersController')
const routes = express.Router()
const cors = require('cors')

routes.use(cors())

routes.post('/register', UsersController.register)

routes.post('/login', UsersController.login)

routes.get('/cinema', UsersController.entry)

module.exports = routes