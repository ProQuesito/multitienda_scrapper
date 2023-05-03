//initializing enviroment variables
//npm i dotenv
require('dotenv').config();

//conecting the database
//npm i mongoose
const mongoose = require('mongoose');
const db= mongoose.connection;
const host= process.env.host;
mongoose.connect(host);

db.on('error', (err)=> console.log('error db not connected'));
db.on('connected', ()=> console.log('connected to mongo'));
db.on('disconnected', ()=> console.log('mongo is disconnected'));
db.on('open', ()=> console.log('connection made!'));

//model schema
const Blog = require('./model/blog.js')

//create our server object

const koa = require('koa');
const server = new koa();

//create our static folder
//npm i koa-static
const static = require('koa-static');

//create our router
//npm i koa-router
const Router = require('koa-router');
const route = new Router();

//initializing views
//npm i koa-views
//npm i nunjucks
const views = require('koa-views');
const nunj = require('nunjucks');
nunj.configure('./views',{autoescape: true});



//routes
//route.get - route.post - route.patch - route.put - route.delete
route.get('/',(ctx,next)=>{
    return ctx.render('./index.html',{
        name: process.env.NAME
    })
});
route.get('/:name',(ctx,next)=>{
    return ctx.render('./index.html',{
        name: ctx.params.name
    })
});

//middleware
//SON LAS COSAS QUE HAY QUE HACER CUANDO ENTRA UNA REQUEST
server.use(views('./views',{map: {html: 'nunjucks'}}))
server.use(route.routes());
server.use(static('./public'));


//listener en el puerto 1985
server.listen(1985,'localhost',()=> console.log('listening on port 1985'));