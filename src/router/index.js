import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import TagTest from '@/pages/TagTest'
import ErrorTest from '@/pages/ErrorTest'
import V_SelectTest from '@/pages/V_SelectTest'
import Components from '@/pages/Components/Components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Components',
      component: Components
    }
  ]
})
