<template>
  <el-breadcrumb separator="/" class="nice-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }" v-for="(item, index) of breadcrumbList" :key="index">{{item}}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data () {
      return {
        breadcrumbList: [
          "首页",
          "活动管理",
          "活动列表",
          "活动详情"
        ]
      }
    },
    created() {
      this.getBreadcrumbList()
    },
    watch: {
      $route() {
        this.getBreadcrumbList()
      }
    },
    methods: {
      getBreadcrumbList () {
        let matched = this.$route
        console.log(matched)
        // if (matched[0] && matched[0].name !== 'dashboard') {
        //   matched = [{ path: '/dashboard', meta: { title: '首页' } }].concat(
        //     matched
        //   )
        // }
        // this.breadcrumbList = matched
      }
    }
  }
</script>

<style lang="less">
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  } 
  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }
  
  .breadcrumb-move {
    transition: all .5s; 
  }

  .breadcrumb-leave-active {
    position: absolute;
  }  
</style>