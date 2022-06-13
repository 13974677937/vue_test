// 该文件用于创建Vuex中的store
import Vuex from "vuex";
import Vue from "vue";
//应用Vuex插件
Vue.use(Vuex)

//创建 actions， 用于响应组件中的动作
const actions = {
  // 函第一个参数为 上下文， 第二个参数为闯过来的值
  increment(context, value) {
    context.commit('increment', value)
  },
  decrement(context, value) {
    context.commit('decrement', value)
  },
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('increment', value)
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit('increment', value)
    }, 1000)
  },
}

//创建mutations，用于操作数据(state)
const mutations = {
  increment(state, value) {
    state.sum += value
  },
  decrement(state, value) {
    state.sum -= value
  },
}

// 创建state，用于存储数据
const state = {
  // count-demo组件求和值
  sum: 0
}

// 创建一个getters ，用于件state的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

//创建，导出store
export default new Vuex.Store({
  actions, mutations, state, getters
})