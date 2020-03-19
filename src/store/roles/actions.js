import axios from 'axios'
export default {
  async fetch({commit}) {
    try {
      const res = await axios.get('corporate_structure')
      commit('setItems', res.data)
    } catch (error) {
      commit('setError', error)
    }
  },
}
