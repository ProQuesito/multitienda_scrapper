const koa = require('koa')

const bodyParser = require('koa-bodyparser')

const productRoutes = require('./routes/products.routes')

const app = new koa()

app.use(bodyParser())

app.use(productRoutes.routes()).use(productRoutes.allowedMethods())

const PORT = 4000

app.listen(PORT, () => {
    console.log(`La aplicacion esta escuchando en el puerto ${PORT}`)
})