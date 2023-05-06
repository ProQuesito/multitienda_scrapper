// API de productos

// Se importan las funciones de javascript para consultar la bd

const {save, getById, getAll, update, removeById, removeAll} = require('../dal/products.dao')

// Mapea el método save
const createProduct = async({nombre, descripcion, precio, marca, pagina}) => {
    const product = {nombre, descripcion, precio, marca, pagina}
    return await save(product)
}

// Mapea el método getById()

const getProduct = async id => {
    return await getById(id)
}

// Mapea el método getAll()

const getProducts = async () => {
    return await getAll()
}

// Mapea el método update()

const updateProduct = async(id, {nombre, descripcion, precio, marca, pagina}) => {
    return await update(id, {nombre, descripcion, precio, marca, pagina})
}

//  Mapea el método removeById()

const deleteProduct = async id => {
    return await removeById(id)
}

// Mapea el método removeAll()
const deleteAllProducts = async id => {
    return await removeAll()
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    deleteAllProducts
}