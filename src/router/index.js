import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/HaveMenu.vue'
import PersonalProjects from '../views/Personalprojects'
import AboutMe from '../views/AboutMe'
import LearningRecord from '../views/LearningRecord'
import Conclusion from '../views/Conclusion'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Layout,
    children: [
      {
        path: 'home',
        component: PersonalProjects
      },
      {
        path: 'aboutMe',
        component: AboutMe
      },
      {
        path: 'learning',
        component: LearningRecord
      },
      {
        path: 'conclusion',
        component: Conclusion
      },
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
