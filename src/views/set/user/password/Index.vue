<template>
  <div class="button-component container">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>修改密码</span>
            </div>
            <el-form :model="passwordForm" status-icon :rules="rules" ref="passwordForm" label-width="100px" class="nice-baseForm">
              <el-form-item label="当前密码" prop="old_password">
                <el-input type="password" v-model="passwordForm.old_password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="new_password">
                <el-input type="password" v-model="passwordForm.new_password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="rep_password">
                <el-input type="password" v-model="passwordForm.rep_password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('passwordForm')">提交</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>

</style>

<script>
  export default {
    data() {
      let validateOldPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入旧密码'))
        } else {
          if (value) {
            callback()
          }
        }
      }
      let validatePassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入新密码'))
        } else {
          if (value) {
            callback()
          }
        }
      }
      let validateRepassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请再次输入新密码'))
        } else if (value !== this.passwordForm.new_password) {
          return callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        passwordForm: {
          old_password: '',
          new_password: '',
          rep_password: ''
        },
        rules: {
          old_password: [
            { validator: validateOldPassword, trigger: 'blur' }
          ],
          new_password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          rep_password: [
            { validator: validateRepassword, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post('https://api.th580.com/customer/action/resetPassword',this.passwordForm)
            .then((res)=>{
              console.log(res)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>