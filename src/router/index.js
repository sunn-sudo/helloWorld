import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import TagTest from '@/pages/TagTest'
import ErrorTest from '@/pages/ErrorTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ErrorTest',
      component: ErrorTest
    }
  ]
})
