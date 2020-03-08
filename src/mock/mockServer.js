/*
 * @Description: 用于启动mock服务文件
 * @Author: kcz
 * @Date: 2020-03-01 11:55:54
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-01 12:55:03
 */
// const mock2 = require('./index')
const Koa = require('koa')
const routes = require('./router.config')
const KoaRouter = require('koa-router')
const router = new KoaRouter()
const app = new Koa()
const port = 9090 // 服务端口

app.listen(port)
console.log('服务启动成功', `http://localhost:${port}/`)

router.use('/', async (ctx, next) => {
  ctx.response.header('Access-Control-Allow-Origin', '*')
  ctx.response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  ctx.response.header('Access-Control-Allow-Headers', 'X-Requested-With')
  ctx.response.header('Access-Control-Allow-Headers', 'Content-Type')
  try {
    await next()
  } catch (e) {
    ctx.throw(500, 'Internal Server Error')
  }
})

router.use(routes)

app.use(router.routes())
