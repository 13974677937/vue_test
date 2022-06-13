<template>
  <ul>
    <!--    <li>消息编号：{{ $route.query.id }}</li>-->
    <!--    <li>消息标题：{{ $route.query.mes }}</li>   -->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ mes }}</li>
<!--    {{ a }} {{ b }}-->
  </ul>
</template>

<script>
export default {
  name: "DetailsItem",
  props: ['id', 'mes']
}
</script>

<style scoped>

</style>