import axios from 'axios'
export default {
  async fetch({commit}) {
    try {
      const res = await axios.get('attendance')
      commit('setPersons', res.data)
    } catch (error) {
      commit('setError', error)
    }
  },
}
