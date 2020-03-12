import axios from "axios"
import router from '@/router'

export default {
  async fetch({ commit, dispatch }, payload) {
    try {
      if ( !payload ) throw 'Muatan kosong.'
      const res = await axios.get(`/users/${payload}`)
      if (res && res.data ) {
        commit('setUser', res.data)
        // dispatch('fetchProfile', res.data.id)
      }
    } catch (error) {
      // commit('setError', error)
      router.replace('/login')
    }
  },
  async fetchProfile({ commit }, payload) {
    try {
      if ( !payload ) throw 'Muatan kosong.'
      const res = await axios.get(`/profiles?uuid=${payload}`)
      commit('setUserProfile', res.data[0])
    } catch (error) {
      commit('setError', error)
    }
  },
  async signIn({ commit, dispatch }, payload) {
    commit('setIsProcessing', true)
    try {
      if ( !payload.email || !payload.password ) throw 'Email dan/atau sandi tak boleh kosong'

      const res = await axios.get(`/users?email=${payload.email}&password=${payload.password}`)

      commit('setIsProcessing', false)
      commit('setUser', res.data[0])
      // dispatch('fetchProfile', res.data[0].id)

      window.$cookies.set('user', res.data[0].id)
      router.replace('/')

    } catch (error) {
      commit('setIsProcessing', false)
      commit('setError', error)
    }

  },
  async signOut( { commit} ) {
    window.$cookies.remove('user')
    commit('default')
    router.replace('/login')
  }
}
