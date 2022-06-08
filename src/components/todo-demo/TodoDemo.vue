<template>
  <div class="todo-container">
    <div class="todo-warp">
      <TodoHeader @addTodo="addTodo"/>
      <TodoList :todos="todos"
                @checkTodo="checkTodo"
                @deleteTodo="deleteTodo"/>
      <TodoFooter v-if="todos.length > 0"
                  @checkAll="checkAll"
                  @clearAll="clearAll"
                  :todos="todos"/>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/todo-demo/TodoHeader";
import TodoList from "@/components/todo-demo/TodoList";
import TodoFooter from "@/components/todo-demo/TodoFooter";

export default {
  name: "TodoDemo",
  components: {TodoHeader, TodoList, TodoFooter},
  data() {
    return {
      todos: []
    }
  },
  methods: {
    // 添加一个TODO
    addTodo(obj) {
      this.todos.unshift(obj)
    },
    // 选择或取消选择
    checkTodo(id) {
      this.todos.forEach(item => {
        if (item.id === id) item.done = !item.done
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    checkAll(e) {
      this.todos.forEach(item => item.done = e)
    },
    clearAll() {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  watch: {
    todos: {
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      },
      deep: true
    }
  },
  mounted() {
    // 从localStorage中取出 todos 数组，若为 null 则默认值为 []
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  }
}
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-warp {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/deep/ body {
  background: #fff;
}

/deep/ .btn {
  display: none;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

/deep/ .btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd363f;
}

/deep/ .btn-danger:hover {
  color: #fff;
  background-color: #bd363f;
}

/deep/ .btn:focus {
  outline: none;
}
</style>
