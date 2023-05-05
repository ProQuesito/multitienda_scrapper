const products = require('./index').db('multitienda_scrapper').collection('products')

const objectId = require('mongodb').ObjectId

// aqui va el codigo que guardara nuevos productos
const save = async({nombre, descripcion, precio, marca, pagina}) => {
    console.log({nombre, descripcion, precio, marca, pagina})
    const result =  await products.insertOne({nombre, descripcion, precio, marca, pagina})
    console.log({nombre, descripcion, precio, marca, pagina})
    console.log(result)
    return result.ops[0]
}

// Leer todos los productos que estan en la base de datos de mongodb
const getAll = async () => {
    const cursor = await products.find()

    return cursor. toArray()
}

// Leer un producto en particular
const getById = async (id) => {
    return await products.findOne({_id:objectId()})
}

// actualizar un producto en particular
const update = async(id, {nombre, descripcion, precio, marca, pagina}) => {
    const result = await products.replaceOne({_id:objectId(id, {nombre, descripcion, precio, marca, pagina})})

    return result.ops[0]
}

// Eliminar un producto usando su id
const removeById = async id => {
    await products.deleteOne({_id:objectId(id)})
}

module.exports = {getAll, getById, removeById,save,update}