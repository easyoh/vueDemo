// state 存放状态成员
// mutations state成员操作
// getters 加工state成员给外界
// actions 异步操作
// modules 模块化状态管理

// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'cqq'
  },
  mutations: {
    edit(state, payload) {
      state.name = 'whl';
      console.log(payload);
    }
  },
  getters: {
    // Getters中的方法有两个默认参数
    // state 当前VueX对象中的状态对象
    // getters 当前getters对象，用于将getters下的其他getter拿来用
    nameInfo(state) {
      return "姓名:" + state.name
    },
    fullInfo(state, getters) {
      return getters.nameInfo + '年龄:' + state.age
    }
  },
  actions: {
    aEdit(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('edit', payload)
          resolve()
          console.log(reject);
        }, 2000)
      })
    }
  },
  modules: {}
})