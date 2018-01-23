import Vue from 'vue'
import Router from 'vue-router'

const Test1 = () => import("@/components/Test1/Test1");
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test1',
      component: Test1
    }
  ]
})
