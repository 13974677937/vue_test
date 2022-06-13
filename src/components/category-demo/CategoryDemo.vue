<template>
  <div class="container">
    <category-item title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">更多美食</a>
      </div>
    </category-item>
    <category-item title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </category-item>
    <category-item title="电影">
      <video slot="center"
             controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">经典</a>
        <a href="https://www.baidu.com">热门</a>
        <a href="https://www.baidu.com">推荐</a>
      </div>
    </category-item>

    <category-item title="test"/>
  </div>
</template>

<script>
import CategoryItem from "@/components/category-demo/CategoryItem";

export default {
  name: "CategoryDemo",
  components: {CategoryItem},
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['英雄联盟', '穿越火线', '求生之路', '虐杀原形'],
      films: ['教父', '肖生克的救赎', '阿甘正传', '三傻大闹宝莱坞']
    }
  }
}
</script>

<style scoped>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

</style>