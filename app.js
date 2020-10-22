const experss = require('express')
const app = experss()
const port = 3000
const routers = require('./routes')

app.set('views engine', 'ejs')
app.use(experss.urlencoded({extended:false}))
app.use(routers)

app.listen(port, ()=>{
    console.log(`Let's Go to The Coffe Shop Link http://localhost:${port}`)
})