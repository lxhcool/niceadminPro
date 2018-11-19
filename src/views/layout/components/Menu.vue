<template>
  <div class="menu-list">
    <template v-for="item in routes" v-if="!item.hidden && item.children">
      <!-- 单级 -->
      <router-link v-if="oneLevel(item.children) && !item.children[0].children && !item.alwaysShow" :key="item.children[0].name" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path + '/' + item.children[0].path">
          <i v-if="item.children[0].meta && item.children[0].meta.icon" :class="item.children[0].meta.icon" class="iconfont iconfont-menu"></i>
          <span slot="title" v-if="item.children[0].meta && item.children[0].meta.title"> {{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <!-- 一级菜单 -->
      <el-submenu v-else :key="item.name" :index="item.name || item.path">
        <template slot="title">
          <i v-if="item.meta && item.meta.icon" :class="item.meta.icon" class="iconfont iconfont-menu"></i>
          <span slot="title" v-if="item.meta && item.meta.title">{{sliderState === 'open' ? item.meta.title : ''}}</span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <!-- 二级菜单 -->
          <sidebar-item v-if="child.children && child.children.length > 0" :routes="[child]" :key="child.path"></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <i class="iconfont iconfont-menu nice-icon-block"></i>
              <span slot="title" v-if="child.meta && child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'menuList',
    props: {
      routes: {
        type: Array
      }
    },
    computed: {
      sliderState() {
        return this.$store.getters.sidebar.sliderState
      }
    },
    methods: {
      oneLevel(children) {
        return children.filter(item => !item.hidden).length === 1
      }
    }
  }
</script>