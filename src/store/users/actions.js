import axios from 'axios'
export default {
  async fetch({commit}) {
    try {
      const res = await axios.get('users')
      commit('setPersons', res.data)
    } catch (error) {
      commit('setError', error)
    }
  },
  async fetchProfiles({commit}) {
    try {
      const res = await axios.get('profiles')
      commit('setProfiles', res.data)
    } catch (error) {
      commit('setError', error)
    }
  }
}
