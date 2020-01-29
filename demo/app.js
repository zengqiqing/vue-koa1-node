const koa = require('koa')
const Router = require('koa-router')
const json = require('koa-json')
const logger = require('koa-logger'); // 引入各种依赖
const parser = require('koa-bodyparser')
const auth = require('./server/routes/auth.js')

const app = new koa()
const router = Router()

app.use(parser())
app.use(json());
app.use(logger());


router.use('/auth', auth.routes())
app.use(router.routes())

app.use(async(ctx,next)=>{
    ctx.body = 'hello, koa!'
})

app.on('error', function(err, ctx){
  console.log('server error', err);
});


app.listen('3000',() => {
  console.log('Koa is listening in 3000');
});

module.exports = app;