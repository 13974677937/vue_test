<template>
  <div id="app">
    <TodoDemo/>
    <AnimationDemo/>
  </div>
</template>

<script>
import TodoDemo from "@/components/todo-demo/TodoDemo";
import AnimationDemo from "@/components/animation-demo/AnimationDemo";

export default {
  name: 'App',
  components: {
    TodoDemo,AnimationDemo
  }
}
</script>

<style>
</style>
