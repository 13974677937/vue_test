<template>
  <div class="todo-container">
    <div class="todo-warp">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/todo-demo/TodoHeader";
import TodoList from "@/components/todo-demo/TodoList";
import TodoFooter from "@/components/todo-demo/TodoFooter";

export default {
  name: "TodoDemo",
  components: {TodoHeader, TodoList, TodoFooter}
}
</script>

<style scoped>
@import url(./main.css);
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-warp {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
