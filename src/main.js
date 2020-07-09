import Vue from 'vue'
import App from './App.vue'
import router from './router'

import i18n from './i18n/i18n';
// const Vue = require('vue')
// const App = require('/App.vue')
// const router = require('./router')

// import store from './store'
//按需引入element-ui
// import './plugins/element.js'
//弹窗
// import qqDia from '@/components/dialog.vue'

// Vue.use(qqDia);
//图表
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// Vue.config.productionTip = false

/**
 * 登录拦截
 */
// router.beforeEach((to, from, next) => {
//   let reg = /^\/login\/*/;
//   if (to.path == "/login") {
//       sessionStorage.removeItem("loginMsg");
//       sessionStorage.clear();
//   }
//   let userLogin = JSON.parse(sessionStorage.getItem('loginMsg'));
// 	console.log("用户名 userLogin:",userLogin)
//   if (!userLogin && !reg.exec(to.path)) {
//       next({path: '/login'})
//   } else {
//       next()
//   }
// })


new Vue({
  router,
  // store,
  i18n,
  render: h => h(App)
}).$mount('#app')
