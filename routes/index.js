const routers = require('express').Router()
const CoffeShop = require('../controller/CoffeShoop-Controller.js')

routers.get('/', CoffeShop.logIn)
routers.get('/home', CoffeShop.showHome)
routers.get('/contomorId', CoffeShop.constomerId)

module.exports = routers