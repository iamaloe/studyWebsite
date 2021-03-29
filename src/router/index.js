import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import studyPlan from '@/view/studyPlan'
import studyNote from '@/view/studyNote'
import bookReport from '@/view/bookReport'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/studyPlan',
      name: 'studyPlan',
      component: studyPlan
    },
    {
      path: '/studyNote',
      name: 'studyNote',
      component: studyNote
    },
    {
      path: '/bookReport',
      name: 'bookReport',
      component: bookReport
    }
  ]
})
