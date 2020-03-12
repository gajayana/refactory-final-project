import axios from "axios"

export default {
  async fetch({commit}) {
    const res = await axios.get('/categories')
    commit('setItems', res.data)
  }
}
