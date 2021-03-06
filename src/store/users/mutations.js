export default {
  setError(state, payload) {
    state.error = payload
  },
  setFilterGroup(state, payload) {
    state.filter_group = parseInt(payload, 10)
  },
  setFilterStr(state, payload) {
    state.filter_str = payload
  },
  setPersons(state, payload) {
    state.persons = payload
  },
  setProfiles(state, payload) {
    state.profiles = payload
  },
}
