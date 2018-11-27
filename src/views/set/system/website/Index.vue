<template>
  <div class="button-component container">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>网站设置</span>
            </div>
            <el-form :model="website" :rules="rules" ref="websiteForm" label-width="100px" class="nice-baseForm">
              <el-form-item label="网站名称" prop="name">
                <el-input v-model="website.name" placeholder="niceAdmin"></el-input>
              </el-form-item>
              <el-form-item label="网站域名" prop="domain">
                <el-input v-model="website.domain" placeholder="http://nicenav.cn"></el-input>
              </el-form-item>
              <el-form-item label="首页标题" prop="title">
                <el-input type="textarea" v-model="website.title" placeholder="niceAdmin后台管理系统"></el-input>
              </el-form-item>
              <el-form-item label="META关键词" prop="keywords">
                <el-input type="textarea" v-model="website.keywords" placeholder="多个关键词用英文状态 , 号分割"></el-input>
              </el-form-item>
              <el-form-item label="META描述" prop="descript">
                <el-input type="textarea" v-model="website.descript"></el-input>
              </el-form-item>
              <el-form-item label="版权信息" prop="copyright">
                <el-input type="textarea" v-model="website.copyright"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('websiteForm')">确认保存</el-button>
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
      return {
        website: {
          name: '',
          domain: '',
          title: '',
          keywords: '',
          descript: '',
          copyright: '© 2018 nicenav.com MIT license'
        },
        rules: {
          name: [
            { required: true, message: '请输入网站名称', trigger: 'blur' }
          ],
          domain: [
            { required: true, message: '请输入网站域名', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '请输入网站首页标题', trigger: 'blur' }
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