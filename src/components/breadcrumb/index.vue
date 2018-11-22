<template>
  <el-breadcrumb separator="/" class="nice-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in list" v-if="item.meta.title" :key="item.path">
        <span class="no-redirect" v-if="item.redirect === 'noredirect' || index === item.length - 1">{{item.meta.title}}</span>
        <router-link v-else :to="item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getList()
    },
    watch: {
      $route() {
        this.getList()
      }
    },
    methods: {
      getList () {
        let matched = this.$route.matched.filter(item => item.meta.title)
        console.log(matched)
      // if (matched[0] && matched[0].name !== 'dashboard') {
      //   matched = [{ path: '/dashboard', meta: { title: 'dashboard' } }].concat(
      //     matched
      //   )
      // }
      this.list = matched
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