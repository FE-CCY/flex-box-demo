import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Example from '@/components/Example'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
