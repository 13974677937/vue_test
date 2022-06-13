<template>
  <div id="app">
    <RouterDemo/>
    <hr/>
    <TodoDemo/>
    <CountDemo/>
    <AnimationDemo/>
    <CategoryDemo/>
  </div>
</template>

<script>
import TodoDemo from "@/components/todo-demo/TodoDemo";
import AnimationDemo from "@/components/animation-demo/AnimationDemo";
import CategoryDemo from "@/components/category-demo/CategoryDemo";
import CountDemo from "@/components/count-demo/CountDemo";
import RouterDemo from "@/pages/router-demo/RouterDemo";

export default {
  name: 'App',
  components: {
    RouterDemo,
    CountDemo,
    CategoryDemo,
    TodoDemo, AnimationDemo
  }
}
</script>

<style>
</style>
