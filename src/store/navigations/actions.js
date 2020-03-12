import axios from "axios"

export default {
  async fetch({commit}) {
    const res = await axios.get('/navigation')
    commit('setItems', res.data)
  }
}
