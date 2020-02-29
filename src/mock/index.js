import Mock from 'mockjs'

// 登录接口
Mock.mock(
  '/xxx/user/main/Login',
  'post',
  {
    code: 0,
    data: {
      name: '小明'
    },
    message: '成功'
  })
