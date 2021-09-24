import Vue from 'vue'
import VueRouter from 'vue-router'
import Ingredients from '@/views/ingredients.vue'
import Models from '@/views/models.vue'
import Procedures from '@/views/procedures.vue'
import Authentification from '@/views/authentification.vue'
Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    name: 'authentification',
    component: Authentification
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: Ingredients
  },
  {
    path: '/models',
    name: 'models',
    component: Models
  },
  {
    path: '/procedures',
    name: 'procedures',
    component: Procedures
  }
]

const router = new VueRouter({  
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
