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
                <img :src="user.avatar" alt="">
              </div>
              <span class="fl">{{user.userName}}</span>
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
          <router-link to="/" tag="span">niceAdmin Pro</router-link>
        </div>
        <div class="nice-nav-tree">
          <el-menu class="nice-menu" 
            router 
            :unique-opened = "menu.unique"
            :collapse="menu.isCollapse" 
            :background-color="menu.bgColor" 
            :text-color="menu.textColor"
            :default-active="$route.path">
            <menu-list :menuList="menuData"></menu-list>
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
import { removeToken } from '@/utils/auth'
import Menu from '@/menu/index'
import menuList from './components/Menu'
import breadcrumb from '@/components/breadcrumb'

export default {
  data() {
    return {
      menu: {
        isCollapse: false,
        bgColor: '#30333C',
        textColor: 'rgba(255,255,255,0.8)',
        unique: true
      },
      menuData: Menu,
      user: {
        avatar: 'http://www.lxhcool.cn/wp-content/uploads/2018/07/2picdiy2017119946275522.png',
        userName: 'Admin'
      }
    };
  },
  components: {
    menuList,
    breadcrumb
  },
  computed: {
    menuStatu() {
      return this.menu.isCollapse ? "nice-shrink" : "";
    },
    iconStatu() {
      return this.menu.isCollapse ? "nice-icon-pic-right" : "nice-icon-pic-left";
    }
  },
  methods: {
    isOpen() {
      this.menu.isCollapse = !this.menu.isCollapse;
    },
    handelCommand(command) {
      if (command === "cancel") {
        this.$confirm("确定要退出登录吗？", "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          this.$notify({
            title: '提示',
            message: '登出成功！',
            type: 'success'
          });
          this.$store.commit('setIsLogin', false)
          window.localStorage.setItem('isLogin', false)
          setTimeout(()=>{
            location.reload()
            this.$router.push({path: '/login'})
          }, 1000)
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