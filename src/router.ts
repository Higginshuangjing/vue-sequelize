import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

function _ (name: string) {
  return () => import(`@/views/${name}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard-index',
      component: _('dashboard/Index')
    }
  ]
})
