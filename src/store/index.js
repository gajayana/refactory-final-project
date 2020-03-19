import Vue from 'vue'
import Vuex from 'vuex'
import attendances from '@/store/attendances'
import auth from '@/store/auth'
import events from '@/store/events'
import groups from '@/store/groups'
import leaves from '@/store/leaves'
import navigations from '@/store/navigations'
import roles from '@/store/roles'
import users from '@/store/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    attendances,
    auth,
    events,
    groups,
    leaves,
    navigations,
    roles,
    users,
  },
})
