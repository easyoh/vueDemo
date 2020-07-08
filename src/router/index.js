// import Vue from 'vue'
import VueRouter from 'vue-router'


// Vue.use(VueRouter)


const home = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
const homepage = () => import(/* webpackChunkName: "homepage" */ '../page/homepage.vue')
const echarts = () => import(/* webpackChunkName: "echarts" */ '../page/echarts/echarts.vue')
const button = () => import(/* webpackChunkName: "button" */ '../page/button.vue')
const father = () => import(/* webpackChunkName: "father" */ '../page/father.vue')
const table = () => import(/* webpackChunkName: "table" */ '../page/table.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    title:'主页面',
    component: home,
    redirect: '/homePage',
    meta: {
        keepAlive: true, 
        title: '首页'
    },
    children: [
      {
        path: '/homePage',
        title:'首页',
        component: homepage,
        meta: {
            // keepAlive: false,
            title: '首页'
        },
      },
      {
        path: '/echart',
        name: 'echart',
        title: '图表',
        //路由懒加载
        component: echarts,
        meta: {
            // keepAlive: false,
            title: '图表'
        },
      },
      {
        path: '/button',
        name: 'button',
        title: '按钮',
        //路由懒加载
        component: button,
        meta: {
            // keepAlive: false,
            title: '按钮'
        },
      },
      {
        path: '/attr',
        name: 'attr',
        title: '传值',
        //路由懒加载
        component: father,
        meta: {
            // keepAlive: false,
            title: '传值'
        },
      },
      {
        path: '/table',
        name: 'table',
        title: '表格',
        //路由懒加载
        component: table,
        meta: {
            // keepAlive: false,
            title: '表格'
        },
      }
  ]
  },
]

const router = new VueRouter({
  routes
})

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

export default router
