<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <!-- 跳转路由 query参数 写法一 -->
        <!-- <router-link :to="`/home/messages/detail?id=${item.id}&mes=${item.mes}`">{{ item.mes }}</router-link>-->
        <!-- 跳转路由 query参数 写法二 -->
        <router-link :to="{
          // path:'/home/messages/detail',
          // query: {
          name: 'detail',
          params:{
            id: item.id,
            mes: item.mes
          }
        }">
          {{ item.mes }}
          <button @click="pushShow(item)">push</button>
          <button @click="replaceShow(item)">replace</button>
        </router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MessagesItem",
  data() {
    return {
      list: [
        {id: '001', mes: 'message001'},
        {id: '002', mes: 'message002'},
        {id: '003', mes: 'message003'}
      ]
    }
  },
  methods:{
    pushShow(o){
      this.$router.push({
        name: 'detail',
        params:{
          id: o.id,
          mes: o.mes
        }
      })
    },
    replaceShow(o){
      this.$router.replace({
        name: 'detail',
        params:{
          id: o.id,
          mes: o.mes
        }
      })
    }
  }
}
</script>

<style scoped>

</style>