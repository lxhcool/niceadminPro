<template>
  <parallax-container>
    <div class="login-wrap">
      <parallax-element :parallaxStrength="4" :type='parallax'>
        <!-- 登录 -->
        <div class="login-box" v-if="type === 'login'">
          <a class="switch">没有账号 <b @click="switchType('signup')">立即注册</b></a>
          <img src="../../assets/logo.png" class="nice-logo">
          <div class="login-form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <div class="login-input">
                <el-form-item prop="username">
                  <el-input class="login-text" type="text" placeholder="用户名" v-model="ruleForm.username"></el-input>
                  <span class="login-focus"></span>
                  <span class="login-symbol">
                    <i class="iconfont nice-icon-user"></i>
                  </span>
                </el-form-item>
              </div>
              <div class="login-input">
                <el-form-item prop="password">
                  <el-input class="login-text" type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="login('ruleForm')"></el-input>
                  <span class="login-focus"></span>
                  <span class="login-symbol">
                    <i class="iconfont nice-icon-lock"></i>
                  </span>
                </el-form-item>
              </div>
              <div class="login-footer">
                <div class="login-btn-wrap">
                  <el-button class="login-btn" type="primary" :loading="loginLoading" @click.native="login('ruleForm')">登录</el-button>
                </div>
              </div>
            </el-form>
          </div>
        </div>
        <!-- 注册 -->
        <div class="login-box" v-else>
          <a class="switch">已有账号 <b @click="switchType('login')">直接登录</b></a>
          <img src="../../assets/logo.png" class="nice-logo">
          <div class="login-form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <div class="login-input">
                <el-form-item prop="username">
                  <el-input class="login-text" type="text" placeholder="用户名" v-model="ruleForm.username"></el-input>
                  <span class="login-focus"></span>
                  <span class="login-symbol">
                    <i class="iconfont nice-icon-user"></i>
                  </span>
                </el-form-item>
              </div>
              <div class="login-input">
                <el-form-item prop="password">
                  <el-input class="login-text" type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="login('ruleForm')"></el-input>
                  <span class="login-focus"></span>
                  <span class="login-symbol">
                    <i class="iconfont nice-icon-lock"></i>
                  </span>
                </el-form-item>
              </div>
              <div class="login-footer">
                <div class="login-btn-wrap">
                  <el-button class="login-btn" type="primary" :loading="loginLoading" @click.native="signup('ruleForm')">注册</el-button>
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </parallax-element>
    </div>
  </parallax-container>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [{ required: true, message: '用户名都没有！', trigger: 'blur' }],
          password: [{ required: true, message: '密码呢！', trigger: 'blur' }]
        },
        loginLoading: false,
        parallax: 'depth',
        type: 'login'
      }
    },
    methods: {
      login (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.loginLoading = true
            let { username, password } = this.ruleForm
            let params = {
              username: username.trim(),
              password: password
            }
            this.$http.get(this.api.login)
            .then(res => {
              const data = res.data
              const users = []
              for (let key in data) {
                const user = data[key]
                users.push(user)
              }
              let result = users.filter((user) => {
                return user.username === this.ruleForm.username && user.password === this.ruleForm.password
              })
              if (result !== null && result.length > 0) {
                this.$store.commit('setIsLogin', true)
                window.localStorage.setItem("isLogin", true)
                this.$store.commit('getUserInfo', result[0].username)
                window.localStorage.setItem("userInfo", result[0].username)
                setTimeout(()=>{
                  this.loginLoading = false
                  this.$router.push({ path: '/' })
                }, 1000)
              } else {
                this.$message.error('请检查用户名或密码是否正确');
                this.loginLoading = false
              }
            }).catch(err => {
                this.$message.error(err.message)
            })
          } else {
            this.loading = false
            this.$message.error('似乎出了什么问题啊，啧啧啧')
          }
        })
      },
      signup (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.loginLoading = true
            let { username, password } = this.ruleForm
            let params = {
              username: username.trim(),
              password: password
            }
            this.$http.post(this.api.register, params)
            .then(res => {
              if (res.status === 200) {
                this.$message({
                  message: '注册成功，跳转到登录界面',
                  type: 'success'
                });
                setTimeout(()=>{
                  this.loginLoading = false
                  this.type = 'login'
                }, 1000)
              }
            }).catch(err => {
                this.$message.error(err.message)
            })
          } else {
            this.loading = false
            this.$message.error('似乎出了什么问题啊，啧啧啧')
          }
        })
      },
      switchType (type) {
        this.type = type
      }
    }
  }
</script>

<style lang="less">
  @import "Login.less";
</style>