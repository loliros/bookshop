import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home'
import searchRouter from './search'
import mineRouter from './mine'
import shopRouter from './shop'
import orderRouter from './mine/order'
Vue.use(VueRouter)

  const routes = [
    shopRouter,
    homeRouter,
    searchRouter,
    mineRouter,
    orderRouter,
    {
      path : '/*',
      redirect : '/home',
    },
]

const router = new VueRouter({
  routes,
  mode : 'history',
  base : process.env.BASE_URL,
})

export default router
