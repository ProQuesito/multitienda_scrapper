const {getAll, getById,removeById,save,update,removeAll} = require('../dal/products.dao')

// map de save() method /post request
const createProduct = async({nombre, descripcion, precio, marca, pagina}) => {
    const product = {nombre, descripcion, precio, marca, pagina}
    
    return await save(product)
}

// Map the getAll() method

const getProducts = async () => {
    return await getAll()
}

// Mapp the getById() method

const getProduct = async id => {
    return await getById(id)
}

//  Map removeById() method

const deleteProduct = async id => {
    return await removeById(id)
}
const deleteAllProducts = async id => {
    return await removeAll()
}

// Map update()

const updateProduct = async(id, {nombre, descripcion, precio, marca, pagina}) => {
    return await update(id, {nombre, descripcion, precio, marca, pagina})
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    deleteAllProducts
}