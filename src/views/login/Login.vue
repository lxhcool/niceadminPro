<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="login-logo"></div>
      <div class="login-form">
        <span class="login-title">Niceadmin</span>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <div class="login-input">
            <el-form-item prop="username">
              <input class="login-text" type="text" name="email" placeholder="用户名" v-model="ruleForm.username">
              <span class="login-focus"></span>
              <span class="login-symbol">
                <i class="iconfont nice-icon-yonghuming1"></i>
              </span>
            </el-form-item>
          </div>
          <div class="login-input">
            <el-form-item prop="password">
              <input class="login-text" type="password" name="password" placeholder="密码" v-model="ruleForm.password">
              <span class="login-focus"></span>
              <span class="login-symbol">
                <i class="iconfont nice-icon-mimacopy"></i>
              </span>
            </el-form-item>
          </div>
          <div class="login-footer">
            <div class="login-btn-wrap">
              <div class="login-btn-bg"></div>
              <el-button class="login-btn" type="primary" :loading="loginLoading" @click.native="login('ruleForm')">登录</el-button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

// <script>
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
        loginLoading: false
      }
    },
    methods: {
      login(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.loginLoading = true
            let { username, password } = this.ruleForm
            let params = {
              username: username.trim(),
              password: password
            }
            this.$store.dispatch('logined', params)
            .then((res)=>{
              this.$notify({
                title: '提示',
                message: '登录成功！',
                type: 'success'
              });
              setTimeout(()=>{
                this.loginLoading = false
                this.$router.push({ path: '/' })
              },1500)
            }).catch((err) => {
              this.loginLoading = false
            })
          } else {
            this.loading = false
            this.$message.error('似乎出了什么问题啊，啧啧啧')
          }
        })
      }
    }
  }
</script>

<style lang="less">
  @import "Login.less";
</style>