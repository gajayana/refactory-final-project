export default {
  admin(state) {
    if (!state.items) return
    return state.items
  },
  items(state, getters, rootState) {
    if (!rootState.auth.user_profile || !state.items) return
    let res = state.items
    if (rootState.auth.user_profile.group[0] !== 1) res = state.items.splice(0, 1)
    return res
  }
}
