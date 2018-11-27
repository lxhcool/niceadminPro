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
              <el-form-item label="当前密码" prop="oldPassword">
                <el-input type="password" v-model="passwordForm.oldPassword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newPassword">
                <el-input type="password" v-model="passwordForm.newPassword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="repassword">
                <el-input type="password" v-model="passwordForm.repassword" autocomplete="off"></el-input>
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
        } else if (value !== this.passwordForm.newPassword) {
          return callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        passwordForm: {
          oldPassword: '',
          newPassword: '',
          repassword: ''
        },
        rules: {
          oldPassword: [
            { validator: validateOldPassword, trigger: 'blur' }
          ],
          newPassword: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          repassword: [
            { validator: validateRepassword, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>