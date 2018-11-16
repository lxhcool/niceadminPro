<template>
  <div class="notfound-wrap">
    <div class="content">
      <div class="title"><span>404</span> Page Not Found</div>
      <div class="sub">We couldn't find what you were looking for.</div>
      <el-button type="primary" @click="returnPrevPage">Back Home</el-button>
      <el-button type="primary" plain>Check Docs</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page404',
  methods: {
    returnPrevPage() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
