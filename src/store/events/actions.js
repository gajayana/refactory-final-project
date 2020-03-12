import axios from "axios"

export default {
  async fetch({commit}) {
    const res = await axios.get('events')
    commit('setItems', res.data)
  }
}
