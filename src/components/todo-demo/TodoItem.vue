<template>
  <transition appear
              name="todo">
    <li>
      <label>
        <input type="checkbox"
               :checked="todo.done"
               @change="handleChange(todo.id)"/>
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input type="text"
               ref="inputTitle"
               v-show="todo.isEdit"
               :value="todo.title"
               @blur="handleBlur(todo,$event)"/>
      </label>
      <button class="btn btn-danger"
              @click="handleDelete(todo.id)"
      >删除
      </button>
      <button class="btn btn-edit"
              v-show="!todo.isEdit"
              @click="handleEdit(todo)"
      >编辑
      </button>
    </li>
  </transition>
</template>

<script>
import 'animate.css'

export default {
  name: "TodoItem",
  props: ['todo'],
  methods: {
    handleChange(id) {
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        this.$bus.$emit('deleteTodo', id)
      }
    },
    handleEdit(todo) {
      todo.isEdit = true
      this.$nextTick(() => {
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false
      this.$bus.$emit('editTodo', todo.id, e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;

  button {
    display: block;
  }
}

.todo-enter-active {
  animation: todo 1s;
}

.todo-leave-active {
  animation: todo 1s reverse;
}

@keyframes todo {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>