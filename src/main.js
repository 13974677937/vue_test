import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import VueRouter from "vue-router";
import router from "@/router";

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
