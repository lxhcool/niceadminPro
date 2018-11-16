<template>
  <div class="nice-app" :class="menuStatu">
    <div class="nice-header">
      <ul class="nice-nav nice-nav-left">
        <li class="nice-nav-item">
          <a href="javascript:;" title="侧边伸缩" @click="isOpen">
            <i class="iconfont" :class="iconStatu"></i>
          </a>
        </li>
        <li class="nice-nav-item">
          <a href="http://www.nicenav.cn" target="_blank" title="前台">
            <i class="iconfont nice-icon-earth"></i>
          </a>
        </li>
        <li class="nice-nav-item">
          <a href="javascript:;" title="刷新">
            <i class="iconfont nice-icon-refresh"></i>
          </a>
        </li>
      </ul>
      <ul class="nice-nav nice-nav-right">
        <li class="nice-nav-item">
          <a href="javascript:;" class="message">
            <i class="iconfont nice-icon-remind"></i>
            <span class="layui-badge-dot"></span>
          </a>
        </li>
        <li class="nice-nav-item">
          <a href="javascript:;" class="tag">
            <i class="iconfont nice-icon-label"></i>
          </a>
        </li>
        <li class="nice-nav-item">
          <el-dropdown trigger="click" @command="handelCommand">
            <span class="el-dropdown-link">
              <div class="fl avatar">
                <img src="http://www.lxhcool.cn/wp-content/uploads/2018/07/2picdiy2017119946275522.png" alt="">
              </div>
              <span class="fl">帝俊</span>
              <i class="iconfont el-icon-caret-bottom fl"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>基本资料</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided command="cancel">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>

    <div class="nice-side">
      <div class="nice-side-scroll">
        <div class="nice-logo">
          <span>niceAdmin Pro</span>
        </div>
        <div class="nice-nav-tree">
          <el-menu class="nice-menu" router 
            :collapse="isCollapse" 
            :background-color="bgColor" 
            :text-color="textColor" 
            :active-text-color="activeTextColor" 
            :default-active="$route.path" 
            :show-timeout="200">
            <menu-list :routes="permission_routers"></menu-list>
          </el-menu>
        </div>
      </div>
    </div>
    <div class="nice-body">
      <div class="nice-body-layout">
        <breadcrumb />
        <div class="nice-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import menuList from './components/Menu'
import breadcrumb from '@/components/breadcrumb'

export default {
  data() {
    return {
      isCollapse: false,
      bgColor: '#30333C',
      textColor: 'rgba(255,255,255,0.8)',
      activeTextColor: '#ffd04b',
    };
  },
  components: {
    menuList,
    breadcrumb
  },
  computed: {
    ...mapGetters(['sidebar', 'permission_routers']),
    menuStatu() {
      return this.isCollapse ? "nice-shrink" : "";
    },
    iconStatu() {
      return this.isCollapse ? "nice-icon-pic-right" : "nice-icon-pic-left";
    }
  },
  methods: {
    isOpen() {
      this.isCollapse = !this.isCollapse;
    },
    handelCommand(command) {
      if (command === "cancel") {
        this.$confirm("确定要退出登录吗？", "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          this.$store.dispatch('logout').then(() => {
            this.$message('登出成功！');
            setTimeout(()=>{
              location.reload()
            },1500)
          })
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
  }
};
</script>

<style lang="less">
@import "css/App.less";
.el-menu-item-group__title {
  padding: 0;
}
</style>