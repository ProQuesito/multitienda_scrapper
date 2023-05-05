const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://diegoprokes:soyeldiego@cluster0.alecdpd.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

client.connect((err) => {
    if(err){
        console.error(err)
        process.exit(-1)
    }
    console.log("Conectado exitosamente a mongodb")
})

module.exports = client