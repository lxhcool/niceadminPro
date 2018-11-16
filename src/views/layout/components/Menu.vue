<template>
  <div class="menu-list">
    <template v-for="item in routes" v-if="!item.hidden && item.children">
      <!-- 一级菜单 -->
      <router-link v-if="oneLevel(item.children) && !item.children[0].children && !item.alwaysShow" :key="item.children[0].name" :to="item.path + '/' + item.children[0].path">
        <el-menu-item :index="item.path + '/' + item.children[0].path">
          <i v-if="item.children[0].meta && item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>
          <span slot="title"
            v-if="item.children[0].meta && item.children[0].meta.title">
            {{item.children[0].meta.title}}
          </span>
        </el-menu-item>
      </router-link>
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
    methods: {
      oneLevel(children) {
        return children.filter(item => !item.hidden).length === 1
      }
    }
  }
</script>