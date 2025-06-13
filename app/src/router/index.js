import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import { auth } from '@/services/firebase'

const requireAuth = (to, from, next) => {
  auth.onAuthStateChanged(user => {
    if (user) next()
    else next('/login')
  })
}

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
