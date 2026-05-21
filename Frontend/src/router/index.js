import { createRouter, createWebHistory } from 'vue-router'

import UsersView from '../views/UsersView.vue'
import LicensedUsersView from '../views/LicensedUsersView.vue'

const routes = [
  {
    path: '/',
    component: UsersView
  },
  {
    path: '/licensed',
    component: LicensedUsersView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router