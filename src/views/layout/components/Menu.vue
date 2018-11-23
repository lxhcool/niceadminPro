<template>
  <div class="menu-list">
    <template v-for="(item, index) of menuList">
      <el-submenu :index="index" :key="item.name">
        <template slot="title">
          <i class="iconfont iconfont-menu" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item-group>
          <el-menu-item v-if="!subItem.children" v-for="subItem of item.children" :key="subItem.name" :index="subItem.path">
            {{subItem.name}}
          </el-menu-item>
        </el-menu-item-group>
        <!-- 三级 -->
        <el-submenu v-if="subItem.children" v-for="(subItem, index) of item.children" :key="subItem.name" :index="index">
          <template slot="title">{{subItem.name}}</template>
          <el-menu-item v-for="threeItem of subItem.children" :key="threeItem.name" :index="threeItem.path">{{threeItem.name}}</el-menu-item>
        </el-submenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "menuList",
  props: {
    menuList: {
      type: Object
    }
  }
};
</script>

<style lang="less">
  .el-menu-item-group__title {
    padding: 0 !important;
  }
</style>