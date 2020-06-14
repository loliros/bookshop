import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home'
import shopRouter from './shop'
import mineRouter from './mine'

Vue.use(VueRouter)

  const routes = [
    homeRouter,
    shopRouter,
    mineRouter,
    {
      path : '/*',
      redirect : '/Home',
    },
]

const router = new VueRouter({
  routes,
  mode : 'history',
  base : process.env.BASE_URL,
})

export default router
