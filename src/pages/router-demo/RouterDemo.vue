<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
          <button @click="back">后退</button>
          <button @click="forward">前进</button>
          <button @click="test">测试一下go</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--replace 模式 路由跳转时回替换掉当前记录-->
          <router-link replace class="list-group-item active" to="/about">About</router-link>
          <br/>
          <router-link class="list-group-item " to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RouterDemo",
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    test() {
      // 负数回退 正数往前
      this.$router.go(-2)
    }
  }
}
</script>

<style scoped>

</style>