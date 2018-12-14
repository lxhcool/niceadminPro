<template>
  <div class="notfound-wrap">
    
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
  .notfound-wrap {
    width: 100%;
    height: 100%;
    background: url("../../assets/Error-404.jpg") no-repeat center;
    background-size: cover;
  }
</style>
