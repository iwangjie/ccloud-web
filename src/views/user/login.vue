<template>

  <div class="warp">

    <div class="login-container">
      <!--            LOGO-->
      <div v-show="isLogin" style="text-align: center">
        <img style="height: 80px;width: 240px"
             src="https://camo.githubusercontent.com/60e63a7b02154fd888b9a6a6aee8e6b155231419/68747470733a2f2f692e6c6f6c692e6e65742f323032302f30322f32312f6673546a6e6d4869774e744f7958382e706e67">
        <h2>登陆</h2>
        <h5>使用您的C-Cloud账号</h5>
      </div>

      <div v-show="!isLogin" style="text-align: center">
        <img style="height: 80px;width: 240px"
             src="https://camo.githubusercontent.com/60e63a7b02154fd888b9a6a6aee8e6b155231419/68747470733a2f2f692e6c6f6c692e6e65742f323032302f30322f32312f6673546a6e6d4869774e744f7958382e706e67">
        <h2>注册</h2>
        <h5>获取您的C-Cloud账号</h5>
      </div>

      <div v-show="isLogin" style="margin-top: 20px">
        <a-form :form="loginForm" @submit="handleSubmitLogin">
          <a-form-item>
            <label>用户名：</label>
            <a-input
              v-decorator="['username', { rules: [{ required: true, message: '请填写用户名' }] }]"
              name="username"/>

          </a-form-item>
          <a-form-item>
            <label>密码：</label>
            <a-input-password
              v-decorator="['password', { rules: [{ required: true, message: '请填写密码' }] }]"
              name="password"
              type="password"/>
          </a-form-item>
          <div>
            <a href="/resetPassword" style="">忘记了密码？</a>
          </div>
          <div style="margin-top: 50px">
            不是您自己的计算机？请使用访客模式无痕登录。
            <p><a href="https://baike.baidu.com/item/%E6%97%A0%E7%97%95%E6%B5%8F%E8%A7%88/9370533?fr=aladdin">了解详情</a>
            </p>
          </div>

          <div style="display: flex;flex-direction: row-reverse;margin-top: 50px">
            <a-button style="width:50px;" type="primary" html-type="submit">登录</a-button>
            <a style="flex-grow: 1;height: 36px;width: 88px" @click="isLogin=false">创建账号</a>
          </div>

        </a-form>
      </div>

      <div v-show="!isLogin" style="margin-top: 20px">
        <a-form :form="regForm" @submit="handleSubmitReg">
          <a-form-item>
            <label>用户名：</label>
            <a-input
              v-decorator="['username', { rules: [{ required: true, message: '请填写用户名' }] }]"
              name="username"/>

          </a-form-item>
          <a-form-item>
            <label>密码：</label>
            <a-input-password
              v-decorator="['password', { rules: [{ required: true, message: '请填写密码' }] }]"
              name="password"
              type="password"/>
          </a-form-item>
          <a-form-item>
            <label>验证码：</label>
            <a-input
              v-decorator="['code', { rules: [{ required: true, message: '请填写验证码' }] }]"
              name="code"
              type="code"/>
            <img id="code" :src="verifyCodeUrl" @click="reloadCode">
          </a-form-item>

          <!--          <div>-->
          <!--            <a href="/resetPassword" style="">忘记了密码？</a>-->
          <!--          </div>-->
          <!--          <div style="margin-top: 50px">-->
          <!--            不是您自己的计算机？请使用访客模式无痕登录。-->
          <!--            <p><a href="https://baike.baidu.com/item/%E6%97%A0%E7%97%95%E6%B5%8F%E8%A7%88/9370533?fr=aladdin">了解详情</a>-->
          <!--            </p>-->
          <!--          </div>-->

          <div style="display: flex;flex-direction: row-reverse;margin-top: 50px">
            <a-button style="width:50px;" type="primary" html-type="submit">注册</a-button>
            <a style="flex-grow: 1;height: 36px;width: 88px" @click="isLogin=true">登录</a>
          </div>

        </a-form>
      </div>

    </div>
  </div>

</template>

<script>
import logo from '@/assets/logo.png'
// import { mapGetters } from 'vuex'

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
}
export default {
  data () {
    return {
      logo,
      formItemLayout,
      formTailLayout,
      // form: {
      //   username: '',
      //   password: ''
      // },
      verifyCodeApi: 'http://localhost:8080/ccloud/verifyCode',
      verifyCodeUrl: 'http://localhost:8080/ccloud/verifyCode',
      isLogin: true,
      loginForm: this.$form.createForm(this, { name: 'login_form' }),
      regForm: this.$form.createForm(this, { name: 'reg_form' })
    }
  },
  computed: {
    // ...mapGetters(['Authorization'])
  },
  methods: {
    reloadCode () {
      this.verifyCodeUrl = this.verifyCodeApi + '?' + Math.random()
    },

    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    },
    check () {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success')
        }
      })
    },
    handleSubmitLogin (e) {
      e.preventDefault()
      this.loginForm.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$axios({
            method: 'post',
            url: '/login',
            data: values
          }).then((response) => { // 这里使用了ES6的语法
            console.log(response) // 请求成功返回的数据
            this.$store.dispatch('changeLogin', response.data.data).then(() => {
              this.$router.push('/')
            }).catch(() => {
              alert('登录错误')
            })
            // 已登录用户路由配置
            // this.$router.addRoutes(asyncRouterMap)
            // this.$store.dispatch('GenerateRoutes')
          }).catch((error) => {
            console.log(error) // 请求失败返回的数据
          })
        }
      })

      return false
    },
    handleSubmitReg (e) {
      e.preventDefault()
      this.regForm.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$axios({
            method: 'post',
            url: '/login',
            data: values
          }).then((response) => { // 这里使用了ES6的语法
            console.log(response) // 请求成功返回的数据
            this.$store.dispatch('changeLogin', response.data.data)
            this.$router.push('/dashboard')
          }).catch((error) => {
            console.log(error) // 请求失败返回的数据
          })
        }
      })

      return false
    }
  }
}
// mounted () {
//   this.$api.aaa().then((response) => {
//     this.$notification.success({
//       message: '成功',
//       description: 'aaa接口请求成功'
//     })
//     console.log(response) // 请求成功返回的数据
//   })
// }

</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .warp {
    position: relative;
    margin: 0 auto;
    max-width: 500px;
    top: 100px;

  }

  .login-container {
    padding: 48px 40px 36px;
    box-shadow: 1px 1px 1px 1px #e5e5e5;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
  }
</style>
