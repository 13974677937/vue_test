<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽，等待填充 -->
    <slot name="center">插槽里面的默认值，如果不传则会显示默认值</slot>
    <slot name="footer">插槽里面的默认值，如果不传则会显示默认值</slot>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: ['title', 'listData']
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
}

video{
  width: 100%;
}
</style>