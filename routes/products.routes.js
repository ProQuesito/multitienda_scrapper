const Router = require('@koa/router')

const {createProduct, updateProduct, deleteProduct, getProduct, getProducts, deleteAllProducts} = require('../api/products.api')

// define the prefix of the api

const router = new Router({
    prefix:'/products'
})

// get request
router.get('/', async ctx => {
    try{
        ctx.body = await getProducts()
    } catch (error){
        console.error('Error al procesar solicitud GET', error)
    }
})

// post request to create a new product
 
router.post('/', async ctx => {
    try {
        console.log('Recibiendo solicitud POST:', ctx.request.body);

        let product = ctx.request.body;
        productId = await createProduct(product);

        console.log('Producto creado:', productId);

        ctx.response.status = 200;
        ctx.body = productId;
    } catch (error) {
        console.error('Error al procesar solicitud POST:', error);
        ctx.response.status = 500;
        ctx.body = 'Error interno del servidor';
    }
})

router.get('/:id', async ctx => {
    try{
        const id = ctx.params.id
        ctx.body = await getProduct(id)
    } catch (error) {
        console.error('Error al procesar solicitud GET:', error);
    }
})


router.delete('/:id', async ctx => {
    try{
        const id = ctx.params.id
        await deleteProduct(id)
        ctx.body = 'Se eliminó correctamente'
    } catch (error) {
        console.error('Error al procesar solicitud DELETE:', error);
    }
})

router.delete('/', async ctx => {
    await deleteAllProducts()
    ctx.body = 'Se eliminaron todos los productos'
})

router.put('/:id', async ctx => {
    const id = ctx.params.id
    let product = ctx.request.body
    ack = await updateProduct(id, product)
    ctx.response.status = 200
    ctx.body = ack
})

module.exports = router