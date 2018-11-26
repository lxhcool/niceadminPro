import Vue from "vue";
import Router from "vue-router";
import { routes } from "./routes";
import { getToken } from "../utils/auth"
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const isLogin = getToken() ? true : false
  console.log(isLogin)
  if (to.path === '/login') {
    next()
  } else {
    if (isLogin) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router;
