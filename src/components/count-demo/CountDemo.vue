<template>
  <div>
    <h2>当前求和为:{{ sum }}</h2>
    <h2>当前求和*10为:{{ bigSum }}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd">当前求和为奇数是再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {
  mapState,
  // mapGetters,
  // mapMutations,
  // mapActions
} from 'vuex'

export default {
  name: "CountDemo",
  data() {
    return {
      num: 1
    }
  },
  computed: {
    // 对象写法
    // ...mapState({sum: 'sum'})
    // 数组写法
    ...mapState(['sum']),
    bigSum(){
      return this.$store.getters.bigSum
    }
    // ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit('increment', this.num)
    },
    decrement() {
      this.$store.commit('decrement', this.num)
    },
    // 生成对应的方法，会调用 commit 方法联系 mutations, 注意生成函数时的参数
    // ...mapMutations(['increment','decrement']),
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.num)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.num)
    }
    // 生成对应的方法，会调用 dispatch 方法联系 actions, 注意生成函数时的参数
    // ...mapActions(['incrementOdd','incrementWait']),
  },
  mounted() {

  }
}
</script>

<style scoped>
button {
  margin-left: 6px;
}
</style>