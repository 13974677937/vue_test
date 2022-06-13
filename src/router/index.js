import VueRouter from "vue-router";
import AboutItem from "@/pages/router-demo/AboutItem";
import HomeItem from "@/pages/router-demo/home/HomeItem";
// import * as path from "path";
import NewsItem from "@/pages/router-demo/home/NewsItem";
import MessagesItem from "@/pages/router-demo/home/MessagesItem";
import DetailsItem from "@/pages/router-demo/home/DetailsItem";


const router = new VueRouter({
  // mode 默认为 hash
  // hash兼容性比history好
  // mode: 'history',
  routes: [
    {
      name: 'about',
      path: '/about',
      component: AboutItem,
      meta: {isAuth: true}
    },
    {
      name: 'home',
      path: '/home',
      component: HomeItem,
      meta: {isAuth: true},
      children: [
        {
          name: 'news',
          path: 'news',
          component: NewsItem,
          meta: {isAuth: true},
          // 独享路由守卫，只有前置
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              next()
            }
            console.log('---- beforeEnter ----')
            console.log(to, from, next)
          }
        },
        {
          name: 'messages',
          path: 'messages',
          component: MessagesItem,
          children: [
            {
              name: 'detail',
              path: 'detail/:id/:mes',
              component: DetailsItem,
              meta: {isAuth: true},
              // props 第一种写法，值为对象，该对象中所有的key-value都会以props的形式传给DetailsItem组件
              // props: { a: 1,b: 'hello'}
              // props 第二种写法,值为布尔值，若值为真，就会将路由组件收到的所有的 params参数，以prop的形式传给组件
              props: true
              // props 第三种写法，值为函数
              // props($router) {
              //   return {id: $router.query.id, mes: $router.query.mes}
              // }
              // props({query: {id, mes}}) {
              //   return {id, mes}
              // }
            }
          ],
          meta: {isAuth: true}
        }
      ]
    }
  ]
})

//全局前置路由守卫 ---> 每次路由切换之前调用（包括初始化）
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    next()
  }
  console.log('---- beforeEach ----')
  console.log(to, from, next)
})
// 全局后置路由守卫 ---> 每次路由切换之后调用
router.afterEach((to, from) => {
  console.log('---- afterEach ----')
  console.log(to, from)
})

export default router