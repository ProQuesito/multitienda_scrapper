const Router = require('@koa/router')

const {createProduct, updateProduct, deleteProduct, getProduct, getProducts} = require('../api/products.api')

// define the prefix of the api

const router = new Router({
    prefix:'/products'
})

// get request
router.get('/', async ctx => {
    ctx.body = await getProducts()
})

// post request to create a new product
 
router.post('/', async ctx => {
    try {
        console.log('Recibiendo solicitud POST:', ctx.request.body);

        let product = ctx.request.body;
        product = await createProduct(product);

        console.log('Producto creado:', product);

        ctx.response.status = 200;
        ctx.body = product;
    } catch (error) {
        console.error('Error al procesar solicitud POST:', error);
        ctx.response.status = 500;
        ctx.body = 'Error interno del servidor';
    }
})

router.get('/:id', async ctx => {
    const id = ctx.params.id
    ctx.body = await getProduct(id)
})


router.delete('/:id', async ctx => {
    const id = ctx.params.id
    await deleteProduct(id)
})

router.put('/:id', async ctx => {
    const id = ctx.params.id
    let product = ctx.request.body
    product = await updateProduct(id, product)
    ctx.response.status = 200
    ctx.body = product
})

module.exports = router