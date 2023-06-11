// Rutas de la app

const Router = require('@koa/router')

// Se importan las funciones de la api

const { createProduct, getProduct, getProducts, updateProduct, deleteProduct, deleteAllProducts } = require('../api/products.api')

// define el prefijo de la api

const router = new Router({
    prefix:'/products'
})

// Ruta verbo POST (crear un producto)

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

// Rut verbo GET (consultar por un producto mediante su id)

router.get('/:id', async ctx => {
    try{
        const id = ctx.params.id
        ctx.body = await getProduct(id)
    } catch (error) {
        console.error('Error al procesar solicitud GET:', error);
    }
})

// Ruta verbo GET (consultar por todos los productos en la bd)
router.get('/', async ctx => {
    try{
        ctx.body = await getProducts()
    } catch (error){
        console.error('Error al procesar solicitud GET', error)
    }
})

// Ruta verbo PUT (modificar un producto mediante su id)

router.put('/:id', async ctx => {
    const id = ctx.params.id
    let product = ctx.request.body
    ack = await updateProduct(id, product)
    ctx.response.status = 200
    ctx.body = ack
})


// Ruta verbo DELETE (eliminar un producto mediante su id)

router.delete('/:id', async ctx => {
    try{
        const id = ctx.params.id
        await deleteProduct(id)
        ctx.body = 'Se eliminó correctamente'
    } catch (error) {
        console.error('Error al procesar solicitud DELETE:', error);
    }
})

// Ruta verbo DELETE (eliminar todos los productos de la bd)

router.delete('/', async ctx => {
    await deleteAllProducts()
    ctx.body = 'Se eliminaron todos los productos'
})

module.exports = router