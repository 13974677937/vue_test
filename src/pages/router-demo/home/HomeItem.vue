<template>
  <div>
    <h2>HOME组件内容</h2>
    <router-link to="/home/news" style="margin-right: 10px">news</router-link>
    <router-link to="/home/messages">messages</router-link>
    <!--在NewsItem组件切换时，不销毁组件 include不写即全都不销毁，include里面为组件名-->
<!--    <keep-alive include="NewsItem">-->
    <keep-alive :include="['NewsItem']">
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
export default {
  name: "HomeItem"
}
</script>

<style scoped>

</style>