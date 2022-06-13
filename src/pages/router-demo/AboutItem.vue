<template>
  <h2>ABOUT组件内容</h2>
</template>

<script>
export default {
  name: "AboutItem",
  // 通过路由规则进入该组件是调用
  beforeRouteEnter(to, from, next) {
    console.log('---- beforeRouteEnter ----')
    console.log(to, from, next)
    next()
  },
  // 通过路由规则 离开该组件是调用
  beforeRouteLeave(to, from, next) {
    console.log('---- beforeRouteLeave ----')
    console.log(to, from, next)
    next()
  }
}
</script>

<style scoped>

</style>