const products = require('./index').db('multitienda_scrapper').collection('products')

const objectId = require('mongodb').ObjectId

// Guarda un producto nuevo en la bd
const save = async({nombre, descripcion, precio, marca, pagina}) => {
    const result =  await products.insertOne({nombre, descripcion, precio, marca, pagina})
    return result.insertedId
}

// Leer un producto en particular con su id
const getById = async (id) => {
    return await products.findOne({_id:new objectId(id)})
}

// Leer todos los productos que estan en la bd
const getAll = async () => {
    const cursor = await products.find()
    return cursor.toArray()
}

// actualizar un producto en particular con su id
const update = async (id, {nombre, descripcion, precio, marca, pagina}) => {
    const result = await products.replaceOne({_id:new objectId(id)}, {nombre, descripcion, precio, marca, pagina})
    console.log(result)
    return result.acknowledged
}

// Eliminar un producto usando su id
const removeById = async id => {
    await products.deleteOne({_id:new objectId(id)})
}

// Eliminar todos los productos
const removeAll = async () => {
    await products.deleteMany()
}

module.exports = {save, getById, getAll, update, removeById, removeAll}