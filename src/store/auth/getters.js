export default {
  userGroup (state, getters, rootState) {
    if ( !rootState.groups.items ) return
    const group = rootState.groups.items.filter( ob => ob.id === state.user_profile.group[0] )
    const subgroup = rootState.groups.items.filter( ob => ob.id === state.user_profile.group[1] )
    return [
      group[0],
      subgroup[0],
    ]
  }
}
