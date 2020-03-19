export default {
  absentees(state, getters, rootState, rootGetters) {
    if (!rootGetters['users/profiles'] || !state.persons) return

    let items = [];

    rootGetters['users/profiles'].forEach(el => {
      if ( state.persons.findIndex(ob => el.uuid === ob ) < 0 && el.group[0] === 3 ) items.push(el)
    });

    return items
  },
  attendees(state, getters, rootState, rootGetters) {
    if (!rootGetters['users/profiles'] || !state.persons) return
    return state.persons.map((ob) => {
      const person = rootGetters['users/profiles'].filter(el => el.uuid === ob)
      return person[0]
    })
  }
}
