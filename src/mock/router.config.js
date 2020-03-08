/*
 * @Description: koa router 配置
 * @Author: kcz
 * @Date: 2020-03-01 12:15:36
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-01 12:38:49
 */
const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Mock = require('mockjs')

router.get('', async (ctx, next) => {
  // 如果访问跟路由，则提示
  ctx.response.body = 'mock server 服务，请写入正常的路由'
})

router.get('/home', async (ctx, next) => {
  ctx.response.body = Mock.mock({
    code: 0,
    data: {
      'name|2-5': '',
      'age|16-24': 20
    },
    message: '成功'
  })
})

router.get('/aaa', async (ctx, next) => {
  ctx.response.body = Mock.mock({
    code: 0,
    data: {
      'year|2000-2020': 2000,
      'value|50-300': 50
    },
    message: '成功'
  })
})

// 导出koa 路由配置
module.exports = router.routes()
