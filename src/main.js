import Vue from 'vue'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueCookies)
axios.defaults.baseURL = 'http://localhost:3000'

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) return next()

  if ( !store.state.auth.user && window.$cookies.isKey('user') ) store.dispatch('auth/fetch', window.$cookies.get('user'))
  if ( !store.state.auth.user_profile && window.$cookies.isKey('user') ) store.dispatch('auth/fetchProfile', window.$cookies.get('user'))
  if ( !store.state.navigations.items && window.$cookies.isKey('user') ) store.dispatch('navigations/fetch')

  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store,
  }

  return middleware[0]({
    ...context
  })

})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
