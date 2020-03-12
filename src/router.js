import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/middlewares/auth'
import store from './store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      beforeEnter(to, from, next) {
        if (!store.state.groups.items) store.dispatch('groups/fetch')
        if (!store.state.users.persons) store.dispatch('users/fetch')
        if (!store.state.users.profiles) store.dispatch('users/fetchProfiles')
        if (!store.state.attendances.persons) store.dispatch('attendances/fetch')
        if (!store.state.events.items) store.dispatch('events/fetch')
        next()
      },
      meta: {
        middleware: [
          auth
        ]
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})
