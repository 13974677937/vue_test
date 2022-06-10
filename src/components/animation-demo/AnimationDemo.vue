<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button>
    <!--  appear 进入时加载动画 -->
    <transition appear name="demo">
      <h1 v-show="isShow">动画显示或隐藏</h1>
    </transition>
    <transition appear
                enter-active-class="animate__swing"
                leave-active-class="animate__backOutUp"
                name="animate__animated animate__bounce">
      <h1 v-show="isShow">动画显示或隐藏(第三方库)</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "AnimationDemo",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: darkolivegreen;
}

.demo-enter-active {
  animation: demo linear 1s;
}

.demo-leave-active {
  animation: demo 1s linear reverse;
}

@keyframes demo {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>