<template>
  <ul class="todo-main">
    <TodoItem v-for="item in todos"
              :key="item.id"
              :todo="item"/>
  </ul>
</template>

<script>
import TodoItem from "@/components/todo-demo/TodoItem";

export default {
  name: "TodoList",
  components: {TodoItem},
  props: ['todos'],
}
</script>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>