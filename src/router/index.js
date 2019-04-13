import Vue from 'vue'
import Router from 'vue-router'
import Backlog from '@/components/Backlog'
import TodoBoard from '@/components/TodoBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // router with a path to our backlog page, when the user hits the root path '/'
      path: '/backlog',
      component: Backlog
    },
    {
      path: '/board',
      component: TodoBoard
    },
    {
      path: '*',
      redirect: '/backlog'
    }
  ]
})
