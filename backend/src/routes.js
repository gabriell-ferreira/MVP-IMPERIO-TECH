const express = require('express')

const systemController = require('./controllers/systemController')

const routes = express()

routes.get('/', systemController.miningNetworkSocial) 
routes.get('/denuncia', systemController.formReport)
routes.get('/encaminhar', systemController.dispatchTeam)
module.exports = routes