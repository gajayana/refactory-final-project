export default {
  setCategories(state, payload) {
    state.categories = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  setFilterGroup(state, payload) {
    state.filter_group = parseInt(payload, 10)
  },
  setFilterStr(state, payload) {
    state.filter_str = payload
  },
  setItems(state, payload) {
    state.items = payload
  }
}
