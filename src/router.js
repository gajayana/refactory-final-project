import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/middlewares/auth'
import store from './store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cuti',
      name: 'leaveRequests',
      component: () => import(/* webpackChunkName: "home" */ './views/LeaveRequests.vue'),
      beforeEnter(to, from, next) {
        if (!store.state.groups.items) store.dispatch('groups/fetch')
        if (!store.state.users.persons) store.dispatch('users/fetch')
        if (!store.state.users.profiles) store.dispatch('users/fetchProfiles')
        if (!store.state.roles.items) store.dispatch('roles/fetch')

        if (!store.state.leaves.categories) store.dispatch('leaves/fetchCategories')
        if (!store.state.leaves.items) store.dispatch('leaves/fetchPersons')
        next()
      },
      meta: {
        middleware: [
          auth
        ]
      },
    },
    {
      path: '/pelamar',
      name: 'applicants',
      component: () => import(/* webpackChunkName: "home" */ './views/Applicants.vue'),
      beforeEnter(to, from, next) {
        if (!store.state.groups.items) store.dispatch('groups/fetch')
        if (!store.state.users.persons) store.dispatch('users/fetch')
        if (!store.state.users.profiles) store.dispatch('users/fetchProfiles')
        if (!store.state.roles.items) store.dispatch('roles/fetch')

        store.commit('users/setFilterGroup', 4)
        next()
      },
      meta: {
        middleware: [
          auth
        ]
      },
    },
    {
      path: '/karyawan',
      name: 'employees',
      component: () => import(/* webpackChunkName: "home" */ './views/Employees.vue'),
      beforeEnter(to, from, next) {
        if (!store.state.groups.items) store.dispatch('groups/fetch')
        if (!store.state.users.persons) store.dispatch('users/fetch')
        if (!store.state.users.profiles) store.dispatch('users/fetchProfiles')
        if (!store.state.roles.items) store.dispatch('roles/fetch')

        store.commit('users/setFilterGroup', 7)
        next()
      },
      meta: {
        middleware: [
          auth
        ]
      },
    },
    {
      path: '/kehadiran',
      name: 'attendances',
      component: () => import(/* webpackChunkName: "attendances" */ './views/Attendances.vue'),
      beforeEnter(to, from, next) {
        if (!store.state.groups.items) store.dispatch('groups/fetch')
        if (!store.state.users.persons) store.dispatch('users/fetch')
        if (!store.state.users.profiles) store.dispatch('users/fetchProfiles')
        if (!store.state.roles.items) store.dispatch('roles/fetch')


        // if (!store.state.leaves.categories) store.dispatch('leaves/fetchCategories')
        // if (!store.state.leaves.items) store.dispatch('leaves/fetchPersons')
        next()
      },
      meta: {
        middleware: [
          auth
        ]
      },
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      beforeEnter(to, from, next) {
        if (!store.state.groups.items) store.dispatch('groups/fetch')
        if (!store.state.users.persons) store.dispatch('users/fetch')
        if (!store.state.users.profiles) store.dispatch('users/fetchProfiles')
        if (!store.state.roles.items) store.dispatch('roles/fetch')

        if (!store.state.attendances.items) store.dispatch('attendances/fetch')
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
