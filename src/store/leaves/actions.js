import axios from 'axios'
export default {
  async fetchCategories({commit}) {
    try {
      const res = await axios.get('leave_categories')
      commit('setCategories', res.data)
    } catch (error) {
      commit('setError', error)
    }
  },
  async fetchPersons({commit}) {
    try {
      const res = await axios.get('leave')
      commit('setItems', res.data)
    } catch (error) {
      commit('setError', error)
    }
  },
}
