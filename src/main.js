// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import VueRouter from 'vue-router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import Routes from './routes/routes'
import VueClipboard from 'vue-clipboard2'
import Antd, { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(Antd)
Vue.use(VueResource)
Vue.use(VueRouter)
// Vue.use(VueAxios,axios)
//创建路由
const router = new VueRouter({
  routes: Routes,
  mode:"history"
});
router.beforeEach((to,from,next) => {
  if(to.meta.requireAuth){
    if(sessionStorage.getItem('loginStatus')){
      next();
    }else{
      message.info("请先登录！");
      next(from.path);
    }
  }else{
    next();
  }
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
})